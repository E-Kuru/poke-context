import { useFormik } from 'formik'
import * as Yup from 'yup'

const App = () => {

  const formik = useFormik({

    initialValues: {
      pseudo: "",
      password: ""
    },

    onSubmit: values => {
      console.log(values)
    },

    validationSchema: Yup.object().shape({

		pseudo: Yup.string()
            .min(5, "Votre pseudo trop court"),
        password: Yup.string()
            .min(5, "Password trop court")
    }),
		validateOnChange: false
  })

  return (

    <form onSubmit={formik.handleSubmit}>
      <input
        name="pseudo"
        type='email'
        placeholder='Entrez votre pseudo'
        value={formik.values.pseudo}
        onChange={formik.handleChange}
      />
      <input
        name="password"
        type="password"
        placeholder="Enter your password"
        value={formik.values.password}
        onChange={formik.handleChange}
      />
      <button type="submit">Submit</button>
    </form>

  )
}

export default App