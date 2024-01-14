export const scrollIntoView = (id, scroll_block = false) => {
  if (!id) return null;
  let element = document.querySelector(
    `${scroll_block ? "#" + scroll_block : "html"}`
  );
  console.log(scroll_block);
  let id_name = element.querySelector(`[id = '${id}']`);
  let element_position = id_name.getBoundingClientRect().top;
  let current_scroll_position = element.scrollTop;
  return element.scrollTo(0, element_position + current_scroll_position);
};
