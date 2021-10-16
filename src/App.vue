<template>
  <div id="app">
    <header>
      <h1>Classic ToDo in Vue</h1>
    </header>
    <section>
      <h2>The best task is a finished task.</h2>

      <input type="text" v-model="enteredTaskValue" @keydown.enter="addTask" />
      <button @click="addTask">Add Task</button>
      <ul v-show="listStatus === 'Hide List'">
        <li
          v-for="(task, index) in tasks"
          :key="task"
          @click="toggleDone"
          :class="taskStatus ? 'line' : ''"
        >
          {{ task }}
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            :style="fontAwesomeStyle"
            @click="removeTask(index)"
          />
        </li>
      </ul>

      <button @click="toggleList" v-if="tasks.length > 0">
        {{ listStatus }}
      </button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listStatus: 'Hide List',
      taskStatus: false,
      fontAwesomeStyle: {
        marginLeft: '20px',
        fontSize: '0.75rem',
        verticalAlign: '0',
      },
    };
  },

  methods: {
    addTask() {
      if (this.enteredTaskValue != '') {
        this.tasks.push(this.enteredTaskValue);
        this.enteredTaskValue = '';
      }
    },
    toggleDone() {
      this.taskStatus = !this.taskStatus;
    },
    removeTask(id) {
      this.tasks.splice(id, 1);
    },
    toggleList() {
      if (this.listStatus === 'Hide List') {
        this.listStatus = 'Show List';
      } else {
        this.listStatus = 'Hide List';
      }
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --linkActiveColor: #41b783;
}

#app {
  font-family: var(--font);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--textColor);

  header {
    width: 60%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    background-color: #c90000;
    color: white;
    text-align: center;
  }

  section {
    width: 60%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 3rem auto;
    border-radius: 10px;
    padding: 1rem;
    text-align: center;

    h2 {
      font-size: 1.5rem;
      border-bottom: 3px solid #ccc;
      color: #990000;
      margin: 0 0 1rem 0;
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      list-style: none;
      margin: 0.5rem 0;
      padding: 0;
    }

    li {
      margin: 1rem 0;
      font-size: 1.25rem;
      // font-weight: bold;
      background-color: #c90000;
      padding: 0.5rem 50px;
      color: white;
      border-radius: 25px;
    }

    .line {
      text-decoration: line-through;
    }

    input {
      width: 30%;
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    input:focus {
      outline: none;
      border-color: #ff9e9e;
      background-color: #ff9e9e;
    }

    button {
      display: block;
      margin: 10px auto;
      font: inherit;
      cursor: pointer;
      border: 1px solid #c90000;
      border-radius: 5px;
      background-color: #c90000;
      color: white;
      padding: 0.05rem 1rem;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    button:hover,
    button:active {
      background-color: #ec3169;
      border-color: #ec3169;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }
  }
}
</style>
