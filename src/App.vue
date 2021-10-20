<template>
  <div id="app">
    <header>
      <h1>Classic ToDo in Vue</h1>
    </header>
    <section>
      <h2>The best tasks are finished tasks.</h2>

      <input
        type="text"
        v-model="enteredTaskValue"
        @keydown.enter="addTask"
        placeholder="...but first write them here!"
      />
      <button @click="addTask">Add Task</button>
      <button @click="toggleList" v-if="tasks.length > 0">
        {{ listStatusCaption }}
      </button>
      <button @click="clearList" v-if="tasks.length > 0">Clear List</button>
      <ul v-show="listStatusCaption === 'Hide List'">
        <li
          v-for="(task, index) in tasks"
          :key="task"
          @click="toggleDone($event)"
        >
          {{ task }}
          <font-awesome-icon
            :icon="['fas', 'trash-alt']"
            class="trash-icon"
            @click.stop="removeTask(index)"
          />
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      listStatusCaption: 'Hide List',
    };
  },

  methods: {
    addTask() {
      if (this.enteredTaskValue !== '') {
        this.tasks.push(this.enteredTaskValue);
        this.enteredTaskValue = '';
      }
    },

    toggleDone(event) {
      event.target.classList.toggle('line');
    },

    removeTask(id) {
      this.tasks.splice(id, 1);
    },

    toggleList() {
      this.listStatusCaption =
        this.listStatusCaption === 'Hide List' ? 'Show List' : 'Hide List';
    },

    clearList() {
      this.tasks = [];
    },
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap');

:root {
  --font: Roboto, sans-serif;
  --textColor: #374961;
  --mainColor: #c44800;
  --secondColor: #eee;
  --hoverColor: #9c3900;
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
    background-color: var(--mainColor);
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
      // border-bottom: 3px solid #ccc;
      color: var(--mainColor);
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
      margin: 0.5rem 0;
      font-size: 1.25rem;
      // font-weight: bold;
      background-color: var(--mainColor);
      padding: 0.5rem 50px;
      color: white;
      border-radius: 7px;

      .trash-icon {
        margin-left: 50px;
        font-size: 0.9rem;
        vertical-align: 0;
      }
    }

    .line {
      text-decoration: line-through;
    }

    input {
      width: 30%;
      padding: 5px;
      font: inherit;
      border: 1px solid #ccc;
      border-radius: 5px;
    }

    input:focus {
      outline: none;
      border-color: var(--secondColor);
      background-color: var(--secondColor);
    }

    button {
      display: block;
      margin: 10px auto;
      font: inherit;
      cursor: pointer;
      border: 1px solid var(--mainColor);
      border-radius: 5px;
      background-color: var(--mainColor);
      color: white;
      padding: 0.05rem 1rem;
      box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
    }

    button:hover,
    button:active {
      background-color: var(--hoverColor);
      border-color: var(--hoverColor);
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
    }
  }
}
</style>
