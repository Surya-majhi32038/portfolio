import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
// import PropTypes from "prop-types";

function ProtectedRoute({element}) {
  const auth = useSelector((state)=> state.auth.Islogged)
  return auth? element : <Navigate to="/login" />
}

// ProtectedRoute.propTypes = {
//     element: PropTypes.element.isRequired,
// }

export default ProtectedRoute