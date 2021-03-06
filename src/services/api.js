const API_ROOT = 'http://localhost:3000'

const token = () => localStorage.getItem("token")

const headers = () => {
  return {
    "Content-Type": "application/json",
    Accept: "application/json", 
    Authorization: token()
  }
}
  const getDrawings = () => {
    return fetch(`${API_ROOT}/drawings/`, { 
      headers: headers()
    }).then(res => res.json()
    )
  }

  const login = data => {
    return fetch(`${API_ROOT}/auth`, {
      method: "POST",
      headers: headers(),
      body: JSON.stringify(data)
    }).then(res => res.json())
  }


const getCurrentUser = () => {
  return fetch(`${API_ROOT}/current_user`, {
    headers: headers()
  }).then(res => { 
    return res.json()
  })
}

export const api = {
  auth: {
    login,
    getCurrentUser
  },
  drawings: {
    getDrawings
  }
}