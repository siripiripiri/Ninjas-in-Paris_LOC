const Profile = () => {
  return (
    <>
        <div className="container profile">
            <form method="">
                <div className="row">
                    <div className="col-md-4">
                        <img className="icon" src="data:image/jpeg;base64,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" alt="" />
                    </div>
                    <div className="col-md-6">
                        <div>
                            <h5>Mahendra Singh Dhoni</h5>
                            <h6>Thala for a reason</h6>
                            {/* name, email, gender, age, weight, height, medical condition, allergies, falily medical history, psychology */}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default Profile