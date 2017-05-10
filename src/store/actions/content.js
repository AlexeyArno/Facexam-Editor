export function changeElement(id, type, data, area) {

  return {
    type: 'CHANGE',
    payload: [id, type, data, area]
  }

}
export function deleteElement(id) {

  return {
    type: 'DELETE',
    payload: id
  }

}
export function setCount(count) {

  return {
    type: 'SET_COUNT',
    payload: count
  }

}

export function createElement(type, area) {

  return {
    type: 'CREATE',
    payload: [type, area]
  }

}
