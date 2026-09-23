//登录校验
function login(){
  let user = document.getElementById("username").value;
  let pwd = document.getElementById("password").value;
  if(user=="202471022" && pwd=="200622shy"){
    alert("登录成功！");
    window.location.href="index.html";
  }else{
    alert("账号或密码错误");
  }
}
