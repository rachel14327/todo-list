const input = document.querySelector("#new-task");
const incompleted_task = document.getElementById("incompleted-tasks");
const completed_task = document.getElementById("completed-tasks");
let update_target = null;
let update = false;
var local = localStorage.getItem("TODO")
  ? JSON.parse(localStorage.getItem("TODO"))
  : {
      done: [],
      todo: [],
    };

renderCaller();

function renderCaller() {
  if (!local.todo.length && !local.done.length) return;
  else {
    for (const i of local.todo) {
      render(i, "todo");
    }
    for (const i of local.done) {
      render(i, "done");
    }
  }

  // if (local.todo.length != 0 && local.done.length != 0) {
  //   for (const i of local.todo) {
  //     render(i, "todo");
  //   }
  //   for (const i of local.done) {
  //     render(i, "done");
  //   }
  // } else {
  //   return;
  // }
}

function add() {
  const val = input.value;
  // console.log(val)
  const ele = document.createElement("span");
  const div = document.createElement("div");
  const div_li = document.createElement("div");
  div_li.classList.add("div_li");
  const parent_div = document.createElement("div");
  parent_div.classList.add("parent_div");
  parent_div.setAttribute("id", "todo");

  div.classList.add("task_list");
  const edit_btn = document.createElement("button");
  edit_btn.type = "button";
  edit_btn.innerText = "Mark as Done";
  // edit_btn.setAttribute("class","edit-btn")
  edit_btn.classList.add("edit-btn");
  edit_btn.addEventListener("click", function (e) {
    const curr_task = e.target.parentElement.parentElement.parentElement;
    const child_task1 =
      e.target.parentElement.parentElement.parentElement.childNodes[0]
        .childNodes[0];
    const child_task_val = child_task1.innerText;
    console.log("index", local.todo.indexOf(child_task_val));
    local.done.push(child_task_val);
    local.todo.splice(local.todo.indexOf(child_task_val), 1);
    localStorage.setItem("TODO", JSON.stringify(local));
    curr_task.setAttribute("id", "done");

    completed_task.appendChild(curr_task);
  });

  // Deleting elements from todo list
  const del_btn = document.createElement("button");
  del_btn.type = "button";
  del_btn.innerText = "Delete";
  // del_btn.setAttribute("class","del-btn")
  del_btn.classList.add("del-btn");
  del_btn.addEventListener("click", function (e) {
    const parent_curr_task =
      e.target.parentElement.parentElement.parentElement.parentElement;
    const child_task = e.target.parentElement.parentElement.parentElement;
    const child_task1 =
      e.target.parentElement.parentElement.parentElement.childNodes[0]
        .childNodes[0];
    const child_task_val = child_task1.innerText;
    const curr_task_list =
      e.target.parentElement.parentElement.parentElement.parentElement
        .childNodes[0];
    console.log("iddd", child_task.getAttribute("id"));
    // console.log("index",local.todo.indexOf(child_task_val));
    if (child_task.getAttribute("id") == "done") {
      local.done.splice(local.done.indexOf(child_task_val), 1);
      localStorage.setItem("TODO", JSON.stringify(local));
    } else {
      local.todo.splice(local.todo.indexOf(child_task_val), 1);
      localStorage.setItem("TODO", JSON.stringify(local));
    }
    console.log(child_task_val.innerText);
    parent_curr_task.removeChild(child_task);
  });

  ele.innerText = val;
  local.todo.push(val);
  localStorage.setItem("TODO", JSON.stringify(local));
  input.value = "";
  ele.setAttribute("class", "child-li");
  ele.addEventListener("click", function (e) {
    // update(e);
    input.value = e.target.innerText;
    update = true;
    // console.log(input.value)
    update_target = e.target;
  });
  if (update) {
    update_target.innerText = val;
    update = false;
  } else {
    div_li.appendChild(ele);
    div.appendChild(edit_btn);
    div.appendChild(del_btn);
    div_li.appendChild(div);

    parent_div.appendChild(div_li);
    incompleted_task.appendChild(parent_div);
  }
}

function render(data, check) {
  if (check == "todo") {
    const ele = document.createElement("span");
    const div = document.createElement("div");
    const div_li = document.createElement("div");
    div_li.classList.add("div_li");
    const parent_div = document.createElement("div");
    parent_div.classList.add("parent_div");
    parent_div.setAttribute("id", "todo");

    div.classList.add("task_list");
    const edit_btn = document.createElement("button");
    edit_btn.type = "button";
    edit_btn.innerText = "Mark as Done";
    // edit_btn.setAttribute("class","edit-btn")
    edit_btn.classList.add("edit-btn");
    edit_btn.addEventListener("click", function (e) {
      const curr_task = e.target.parentElement.parentElement.parentElement;
      const child_task1 =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
          .childNodes[0];
      const child_task_val = child_task1.innerText;
      console.log("index", local.todo.indexOf(child_task_val));
      local.done.push(child_task_val);
      local.todo.splice(local.todo.indexOf(child_task_val), 1);
      localStorage.setItem("TODO", JSON.stringify(local));
      curr_task.setAttribute("id", "done");

      completed_task.appendChild(curr_task);
    });

    // Deleting elements from todo list
    const del_btn = document.createElement("button");
    del_btn.type = "button";
    del_btn.innerText = "Delete";
    // del_btn.setAttribute("class","del-btn")
    del_btn.classList.add("del-btn");
    del_btn.addEventListener("click", function (e) {
      const parent_curr_task =
        e.target.parentElement.parentElement.parentElement.parentElement;
      const child_task = e.target.parentElement.parentElement.parentElement;
      const child_task1 =
        e.target.parentElement.parentElement.parentElement.childNodes[0]
          .childNodes[0];
      console.log("child_task1", child_task1);
      const child_task_val = child_task1.innerText;
      console.log("index", local.todo.indexOf(child_task_val));
      console.log("index", local.todo.indexOf(child_task_val));
      if (child_task.getAttribute("id") == "done") {
        local.done.splice(local.done.indexOf(child_task_val), 1);
        localStorage.setItem("TODO", JSON.stringify(local));
      } else {
        local.todo.splice(local.todo.indexOf(child_task_val), 1);
        localStorage.setItem("TODO", JSON.stringify(local));
      }
      console.log(child_task_val.innerText);
      parent_curr_task.removeChild(child_task);
    });

    ele.innerText = data;
    // local.push(val)
    // localStorage.setItem("TODO",JSON.stringify(local))
    input.value = "";
    ele.setAttribute("class", "child-li");
    ele.addEventListener("click", function (e) {
      // update(e);
      input.value = e.target.innerText;
      update = true;
      // console.log(input.value)
      update_target = e.target;
    });
    if (update) {
      update_target.innerText = val;
      update = false;
    } else {
      div_li.appendChild(ele);
      div.appendChild(edit_btn);
      div.appendChild(del_btn);
      div_li.appendChild(div);

      parent_div.appendChild(div_li);
      incompleted_task.appendChild(parent_div);
    }
  } else {
    const ele = document.createElement("span");
    const div = document.createElement("div");
    const div_li = document.createElement("div");
    div_li.classList.add("div_li");
    const parent_div = document.createElement("div");
    parent_div.classList.add("parent_div");
    parent_div.setAttribute("id", "todo");

    div.classList.add("task_list");
    // const edit_btn = document.createElement("button");
    // edit_btn.type = "button";
    // edit_btn.innerText = "Mark as Done";
    // // edit_btn.setAttribute("class","edit-btn")
    // edit_btn.classList.add("edit-btn");
    // edit_btn.addEventListener("click", function (e) {
    //   const curr_task = e.target.parentElement.parentElement.parentElement;
    //   const child_task1 =
    //     e.target.parentElement.parentElement.parentElement.childNodes[0]
    //       .childNodes[0];
    //   const child_task_val = child_task1.innerText;
    //   console.log("index", local.todo.indexOf(child_task_val));
    //   local.done.push(child_task_val);
    //   local.todo.splice(local.todo.indexOf(child_task_val), 1);
    //   localStorage.setItem("TODO", JSON.stringify(local));
    //   curr_task.setAttribute("id", "done");
    //   completed_task.appendChild(curr_task);
    // });

    // Deleting elements from todo list
    const del_btn = document.createElement("button");
    del_btn.type = "button";
    del_btn.innerText = "Delete";
    // del_btn.setAttribute("class","del-btn")
    del_btn.classList.add("del-btn");
    del_btn.addEventListener("click", function (e) {
      const parent_curr_task =
        e.target.parentElement.parentElement.parentElement.parentElement;
      const child_task = e.target.parentElement.parentElement.parentElement;
      child_task.setAttribute("id","done")
      const child_task1 = e.target.parentElement.parentElement.parentElement.childNodes[0].childNodes[0];
      console.log("child_task1", child_task1);
      const child_task_val = child_task1.innerText;
      console.log(child_task_val);
      console.log("index", local.done.indexOf(child_task_val));
      console.log("id", child_task.getAttribute("id"));
      if (child_task.getAttribute("id") == "done") {
        local.done.splice(local.done.indexOf(child_task_val), 1);
        localStorage.setItem("TODO", JSON.stringify(local));
      } else {
        local.todo.splice(local.todo.indexOf(child_task_val), 1);
        localStorage.setItem("TODO", JSON.stringify(local));
      }
      parent_curr_task.removeChild(child_task);
    });

    ele.innerText = data;
    // local.push(val)
    // localStorage.setItem("TODO",JSON.stringify(local))
    input.value = "";
    ele.setAttribute("class", "child-li");
    ele.addEventListener("click", function (e) {
      // update(e);
      input.value = e.target.innerText;
      update = true;
      // console.log(input.value)
      update_target = e.target;
    });
    if (update) {
      update_target.innerText = val;
      update = false;
    } else {
      div_li.appendChild(ele);
      // div.appendChild(edit_btn);
      div.appendChild(del_btn);
      div_li.appendChild(div);

      parent_div.appendChild(div_li);
      completed_task.appendChild(parent_div);
    }
  }
}
