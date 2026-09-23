function login(){
  let user = document.getElementById("login-username").value;
  let pwd = document.getElementById("login-password").value;
  if(user=="202471022" && pwd=="200622shy"){
    alert("登录成功！");
    window.location.href="index.html";
  }else{
    alert("账号或密码错误");
  }
}
