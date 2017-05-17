export function changeElement(id, type, data, area) {

  return {
    type: 'CHANGE',
    payload: {id: id, type: type, value: data, area: area}
  }

}
export function deleteElement(id, area) {

  return {
    type: 'DELETE',
    payload: {id: id, area: area}
  }

}

export function createElement(type, area) {
  return {
    type: 'CREATE',
    payload: {type: type, area: area}
  }

}
