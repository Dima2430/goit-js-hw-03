function slugify(title) {
  let newTitle = title.toLowerCase().split(" ");
  return newTitle.join("-");
}


