export function changeElement(id, type, data, area) {

  return {
    type: 'CHANGE',
    payload: [id, type, data, area]
  }

}
export function deleteElement(id, area) {

  return {
    type: 'DELETE',
    payload: [id, area]
  }

}

export function createElement(type, area) {

  return {
    type: 'CREATE',
    payload: [type, area]
  }

}
