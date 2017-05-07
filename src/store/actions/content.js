export function changeElement(id, type, data) {

  return {
    type: 'CHANGE',
    payload: [id, type, data]
  }

}
export function deleteElement(id) {

  return {
    type: 'DELETE',
    payload: id
  }

}

export function createElement(type) {

  return {
    type: 'CREATE',
    payload: type
  }

}
