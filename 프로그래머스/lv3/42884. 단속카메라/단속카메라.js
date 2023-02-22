const solution = (routes) => {
  let answer = 0;
  routes.sort((a, b) => {
    return a[1] - b[1];
  });
    console.log(routes);
  let camera = -30001;
  for (let i = 0; i < routes.length; i++) {
    console.log(camera, "camera");

    if (camera < routes[i][0]) {
      answer++;
      camera = routes[i][1];
    }
  }
  return answer;
};