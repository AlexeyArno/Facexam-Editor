import NewId from './new-id.js'
import Img from '../default-elements/img.js'
import Code from '../default-elements/code.js'
import Paragraph from '../default-elements/paragraph.js'
import List from '../default-elements/list.js'
import Check from '../default-elements/check.js'
import Radio from '../default-elements/radio.js'
import Textfield from '../default-elements/textfield.js'
import Change from '../data-work/change-smth.js'


var Create = function(type, area, task) {
	var location = (area==task.content.length) ? (task.description): (task.content[area].content)
	var new_id = NewId(location)
	switch(type){
    case 'paragraph':
      var new_element = Paragraph(new_id)
      break;
    case 'img':
       var new_element = Img(new_id)
      break;
    case 'code':
        var new_element = Code(new_id)
        break;
    case 'list':
        var new_element = List(new_id)
        break;
    case 'check':
        var new_element = Check(new_id)
        break;
    case 'field':
        var new_element = Textfield(new_id)
        break;
    case 'radio':
        var new_element = Radio(new_id)
        break;
    default:
     return task
     break;
  }
  location.push(new_element)
  return task
}

export default Create