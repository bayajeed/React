const BioData = (props) => {
    const { user, email, phone, skills, interest } = props;
    return (
        <>
        <button onClick={() => console.log(user)}>Click Me</button>
        <h1>My Bio</h1><h1>BioData For {user}</h1>
        {
            email && <p><strong>Email:</strong>{email}</p>
        }
        {
            phone && <p><strong>Phone:</strong>{phone}</p>
        }
        <div>
            <h1>Skills</h1>
            <ul>
                {skills.map((skills)=>(
                    <li key={skills}>{skills}</li>
                ))}
            </ul>
        </div>
        <div>
            <h1>Interest</h1>
            <ul>
                {interest.map((interest)=>(
                    <li key={interest}>{interest}</li>
                ))}
            </ul>
        </div>
        </>
    );
};
export default BioData;