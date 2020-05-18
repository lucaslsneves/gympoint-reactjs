export function searchStudentRequest(name, page = 1) {
  return {
    type: '@student/SEARCH_REQUEST',
    payload: {
      name,
      page,
    },
  };
}

export function searchStudentSuccess(data) {
  return {
    type: '@student/SEARCH_SUCCESS',
    payload: {
      ...data,
    },
  };
}

export function loadStudentsRequest() {
  return {
    type: '@student/LOAD_REQUEST',
  };
}

export function loadStudentsSuccess(data) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: {
      ...data,
    },
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: {
      id,
    },
  };
}

export function deleteStudentSuccess(data) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: {
      ...data,
    },
  };
}