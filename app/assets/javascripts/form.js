var num = 1
function returnHTML(num){
  html = `
  <li>
    <label for="term_samples_attributes_${num}_name">Name</label>
  </li>
  <li>
    <input type="text" name="term[samples_attributes][${num}][name]" id="term_samples_attributes_${num}_name" />
  </li>
  <li>
    <label for="term_samples_attributes_${num}_url">Url</label>
  </li>
  <li>
    <input type="text" name="term[samples_attributes][${num}][url]" id="term_samples_attributes_${num}_url" />
  </li>
  `
  return html
}
$(function(){
  $(document).on('click', ".add_sample", function(){
    html = returnHTML(num);
    $(html).appendTo('.samples');
    num += 1
  })
})
