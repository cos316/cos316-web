---
title: Assignment Dashboard
layout: default
---

{% if jekyll.environment == "production" %}
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js"></script>
{% else %}
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
{% endif %}
{% raw %}
<style>
.tableFixHead {
  overflow-y: auto;
  max-height: 20em;
}
.tableFixHead thead th {
  position: sticky;
  top: 0;
}
table {
  border-collapse: collapse;
  width: 100%;
}
th,
td {
  padding: 8px 16px;
  border: 1px solid #ccc;
}
th {
  background: #eee;
}
</style>
<div id="app">
  <template v-if="jwt && user">
    <a href="#" v-on:click="logout">Logout</a>
    <template v-if="githubUser">
    <p>You are logged in as <em>{{user}}</em> and GitHub user <em>{{githubUser}}</em></p>
      <template v-for="(value, assignment) in assignments">
        <h2 v-bind:id="assignment">{{ value.assignment.title }}</h2>
        <p v-if="value.repo">
        Your repository: <a v-bind:href="value.repo" target="new">{{value.repo}}</a>
        </p>
        <p v-else-if="starting[assignment]">
        <em>Creating repository...</em>
        </p>
        <assignment-create v-bind:roster="enrolledStudents" v-bind:assignment="value" v-bind:assignment-key="assignment" v-else v-on:start="start">
        </assignment-create>
      </template>
    </template>
    <template v-else>
      <p>You must also pair your NetID with a GitHub account by logging in with Github</p>
      <a href="#" v-on:click="pairWithGithub">Login with GitHub</a>
    </template>
  </template>
  <template v-else>
  <p>To access the assignment dashboard, login using your Princeton NetID</p>
  <a href="#" v-on:click="login">Login with NetID</a>
  </template>
</div>
<script>
  let baseUrl = "https://sns29.cs.princeton.edu";
  
  Vue.component('assignment-create', {
    props: [ 'assignment', 'assignmentKey', 'roster' ],
    data: function() {
      return {
        partnerSearch: "",
        searchStudents: [],
        partners: new Set(),
        showRoster: false,
      };
    },
    methods: {
      select: function(student) {
        this.partnerSearch = "";
        this.partners.push(student);
      }
    },
    computed: {
      searched: function() {
        let prtnr = this.partnerSearch.toLowerCase();
        if (prtnr.length > 0 || this.showRoster) {
          return this.roster.filter((student) =>
            student.name.toLowerCase().includes(prtnr) ||
            student.netid.toLowerCase().includes(prtnr)
          );
        } else {
          return [];
        }
      }
    },
    template: `
      <div>
        <p v-if="partners.size > 0">
          You've chosen to work with
          <span v-for="(partner, idx) in partners"><em>{{ partner.name }} ({{ partner.netid }})</em><span v-if="idx + 1 < partners.size">, </span></span>.
        </p>
        <template v-if="(assignment.assignment.group_size || 0) - partners.size > 1">
        <p>This is a group assignment, you must choose {{
        assignment.assignment.group_size - 1 - partners.size }} more classmate(s) to work
        with. <em>Do not add people to your team without the permission from them</em>.</p>
        <p>
        <input type="search" placeholder="Find a partner by name or NetID" id="partner_search" style="padding: 1em; font-size: 1.2em; width: 25em;" v-model="partnerSearch"/>
        <a href="#" v-on:click="showRoster = false; partnerSearch = ''" v-if="showRoster">hide</a><a href="#" v-on:click="showRoster = true" v-else>view all</a>
        </p>
        <div class="tableFixHead" v-if="searched.length > 0">
          <table>
            <thead>
              <tr>
                <th>&nbsp;</th>
                <th>Name</th>
                <th>E-mail</th>
              </tr>
            </thead>
            <tr v-for="student in searched">
              <td width="7em"><a href="#" v-on:click="select(student)">Select</a></td>
              <td>{{student.name}}</td>
              <td><a v-bind:href="'mailto:' + student.netid + '@princeton.edu?Subject=Work+together+on+COS316+assignment%3F'" target="new">{{student.netid}}@princeton.edu</a></td>
            </tr>
          </table>
        </div>
        </template>
        <template v-else>
        <p>
          To begin working on this assignment, we need to create a repository for you.
          <a href="#" v-on:click="$emit('start', assignmentKey, partners)">Click here to start</a>
        </p>
        </template>
      </div>
    `
  });
  
  var app = new Vue({
    el: '#app',
    data: {
      jwt: window.sessionStorage.getItem("snapfaas-jwt"),
      user: null,
      githubUser: null,
      assignments: {},
      starting: {},
      enrollments: null,
    },
    created: function() {
      window.addEventListener("message", (event) => {
          if (event.source === this.casPopup) {
            this.jwt = event.data;
            window.sessionStorage.setItem("snapfaas-jwt", event.data);
          } else if (event.source === this.githubPopup) {
            if (event.data == "jwt_please") {
              event.source.postMessage(this.jwt, baseUrl);
            } else {
                this.githubUser = JSON.parse(event.data);
            }
          }
      }, false);
      this.me(this.jwt);
    },
    methods: {
      start: async function(assignment, partners) {
        this.$set(this.starting, assignment, true);
        let url = new URL(baseUrl);
        url.pathname = "/assignments";
        partners.add(this.user);
        let data = {
            assignment: assignment,
            users: Array.from(partners).map(partner => partner.netid + "@princeton.edu"),
        };
        let response = await fetch(url, {
          method: 'POST',
          headers: new Headers({
              'Authorization': 'Bearer '+ this.jwt,
              'Content-Type': 'application/json',
          }),
          body: JSON.stringify(data),
        });
        let respData = await response.json();
        if (respData["error"]) {
          alert(respData["error"]);
        } else {
          this.assignments[assignment].repo = "https://github.com/cos316/" + respData.name;
        }
      },
      me: async function(jwt) {
        if (jwt) {
          let response = await fetch(baseUrl + "/me", {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.jwt
            }),
          });
          let me = await response.json();
          this.user = me["login"];
          this.githubUser = me["github"];
          response = await fetch(baseUrl + "/get?keys=cos316/enrollments.json", {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + this.jwt
            }),
          });
          this.enrollments = JSON.parse((await response.json())["cos316/enrollments.json"]);
        }
      },
      login: function() {
        if (!this.jwt) {
            this.casPopup = window.open(baseUrl + "/login/cas", "Login", "popup");
        }
      },
      pairWithGithub: function() {
        this.githubPopup = window.open(baseUrl + "/login/github", "Login", "popup");
      },
      getAssignments: async function() {
        let response = await fetch(baseUrl + "/get?keys=cos316/assignments", {
          method: 'GET',
          headers: new Headers({
              'Authorization': 'Bearer ' + this.jwt
          }),
        });
        let now = new Date();
        let baseAssignments = Object.fromEntries(Object.entries((await response.json())).map(([k,v]) => [k, JSON.parse(v)]))["cos316/assignments"];
        let keys = Object.entries(baseAssignments).filter(([k,v]) => now >= new Date(v["release_date"])).map(([key, v]) =>  "cos316/assignments/" + key + "/" + this.user);
        let url = new URL(baseUrl);
        url.pathname = "/get";
        url.searchParams.append("keys", keys);; 
        response = await fetch(url, {
          method: 'GET',
          headers: new Headers({
              'Authorization': 'Bearer ' + this.jwt
          }),
        });
        let result = await response.json();
        result = Object.fromEntries(Object.entries(result).map(([k, v]) => {
            k = k.match(/cos316\/assignments\/([^/]+)\/.*/)[1];
            let val = {
                repo: v ? "https://github.com/" + v : null,
                assignment: baseAssignments[k]
            };
            return [k, val];
        }));
        this.assignments = result;
      },
      logout: async function() {
        window.sessionStorage.removeItem("snapfaas-jwt");
        this.jwt = null;
        this.user = null;
        this.githubUser = null;
      }
    },
    computed: {
      enrolledStudents: function() {
        if (this.enrollments) {
          return Object.entries(this.enrollments)
                  .filter(([key, value]) => value.type == "StudentEnrollment" && (key + "@princeton.edu") != this.user)
                  .map(([key, value]) => Object.assign({netid: key}, value))
                  .sort((student1, student2) => {
                    if (student1["last"] == student2["last"]) {
                      return student1["first"].localeCompare(student2["first"]);
                    } else {
                      return student1["last"].localeCompare(student2["last"]);
                    }
                  });
        } else {
          return [];
        }
      }
    },
    watch: {
      jwt: function(newJwt, oldJwt) {
        this.me(newJwt);
      },
      githubUser: function(newGhUser, oldGhUser) {
        if (newGhUser) {
          this.getAssignments();
        }
      },
    }
  })
</script>

{% endraw %}
