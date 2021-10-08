<template>
  <router-view />
</template>

<style lang="scss">
@charset "UTF-8";
body,
div,
ul,
li,
ol,
h1,
h2,
h3,
h4,
h5,
h6,
input,
textarea,
select,
p,
dl,
dt,
dd,
a,
img,
button,
form,
table,
th,
tr,
td,
tbody,
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  margin: 0;
  padding: 0;
}
body {
  color: #333;
  background-color: #fff;
  overflow-x: hidden;
}
a {
  text-decoration: none;
  cursor: pointer;
}
ul,
li {
  list-style-type: none;
}
input {
  outline: none;
}
textarea {
  outline: none;
  resize: none;
}
.clearfix:after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

@import url('https://fonts.googleapis.com/css?family=Poppins:400');
html {font-size: 100%;} /*16px*/

body {
  background: white;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #000000;
}

p {margin-bottom: 1rem;}

h1, h2, h3, h4, h5 {
  font-weight: 400;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 2.488rem;
}

h2 {font-size: 2.074rem;}

h3 {font-size: 1.728rem;}

h4 {font-size: 1.44rem;}

h5 {font-size: 1.2rem;}

small, .text_small {font-size: 0.833rem;}
html,body,#app{
  min-height:100%;
  min-width:100%;
  height:100%;
  width:100%
}
.center{
  display:flex;
  justify-content: center;
  align-items: center;
  align-content: center;
}
</style>
