import React from 'react'

export default function LaunchItem({
  launch: {
    mission_name,
    launch_date_local,
    launch_success
  }
}) {
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <strong>Mission: { mission_name }</strong>
          <p>Success: { launch_success }</p>
          <p>Date: { launch_date_local }</p>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-secondary">Launch Details</button>
        </div>
      </div>
    </div>
  )
}
