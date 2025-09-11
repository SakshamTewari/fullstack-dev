/*
    Contact Form
    - name, email, message fields
    - all fields required.
    - on submission, show "Thank you, {name}!"
    - handle errors
*/

const ContactForm = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const [submittedName, setSubmittedName] = React.useState('');
  const [errors, setErrors] = React.useState({});
  const [form, setForm] = React.useState({ name: '', email: '', message: '' });

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email))
      newErrors.email = 'Invalid email format';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) setErrors(validationErrors);
    else {
      setSubmittedName(form.name);
      setSubmitted(true);
      setErrors({});
      setForm({ name: '', email: '', message: '' });
    }
  };
  return (
    <div>
      {submitted ? (
        <p>Thank you, {submittedName}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              id='name'
              name='name'
              type='text'
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <p>{errors.name}</p>}
          </div>

          <div>
            <label htmlFor='email'>Email:</label>
            <input
              id='email'
              name='email'
              type='email'
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <p>{errors.email}</p>}
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea
              id='message'
              name='message'
              type='email'
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <p>{errors.message}</p>}
          </div>
          <button type='submit'>Submit</button>
        </form>
      )}
    </div>
  );
};

const contactFormRoot = ReactDOM.createRoot(
  document.getElementById('contact-form'),
);
contactFormRoot.render(<ContactForm />);
