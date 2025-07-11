import { useFormik } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      fatherName: '',
      faculty: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required('Ad və Soyad tələb olunur')
        .min(3, 'Ad və Soyad ən azı 3 simvoldan ibarət olmalıdır'),
      fatherName: Yup.string().required('Atanızın adı tələb olunur'),
      faculty: Yup.string().required('Fakültə tələb olunur'),
      email: Yup.string()
        .email('Email düzgün deyil')
        .required('Email tələb olunur'),
      phone: Yup.string()
        .required('Telefon nömrəsi tələb olunur')
        .matches(
          /^[0-9]+$/,
          'Telefon nömrəsi yalnız rəqəmlərdən ibarət olmalıdır'
        ),
      subject: Yup.string().required('Mövzu seçilməlidir'),
      message: Yup.string()
        .required('Müraciət yazılmalıdır')
        .min(10, 'Müraciət ən azı 10 simvoldan ibarət olmalıdır'),
    }),
    onSubmit: (_, { resetForm }) => {
      resetForm()
    },
  });

  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-8 rounded-lg max-w-3xl mx-auto shadow-lg">
        <h1 className="text-3xl font-semibold text-[#0D1F4F] mb-4">Rektora Müraciət</h1>
        <p className="text-[#3b4a7f] text-sm mb-8 leading-relaxed">
          Hörmətli Tələbələr, əgər Rektora hər hansı bir sualınız varsa, müraciətinizi təqdim edə bilərsiniz.
          Xahiş olunur, müraciət formasındakı bütün tələb olunan sahələrin tam olaraq doldurulmasını və mətnlərinizi aydın şəkildə ifadə etməyinizi təmin edin.
        </p>
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="name">
                Ad & Soyad
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600 text-xs mt-2">{formik.errors.name}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="fatherName">
                Atanızın adı
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
                value={formik.values.fatherName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.fatherName && formik.errors.fatherName ? (
                <div className="text-red-600 text-xs mt-2">{formik.errors.fatherName}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="faculty">
                Fakültə
              </label>
              <input
                type="text"
                id="faculty"
                name="faculty"
                className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
                value={formik.values.faculty}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.faculty && formik.errors.faculty ? (
                <div className="text-red-600 text-xs mt-2">{formik.errors.faculty}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600 text-xs mt-2">{formik.errors.email}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="phone">
                Nömrə
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="text-red-600 text-xs mt-2">{formik.errors.phone}</div>
              ) : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="subject">
                Mövzu
              </label>
              <select
                id="subject"
                name="subject"
                className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              >
                <option selected hidden>Seçin</option>
                <option value="question">Sual</option>
                <option value="complaint">Şikayət</option>
                <option value="suggestion">Təklif</option>
                <option value="request">Ərizə</option>
              </select>
              {formik.touched.subject && formik.errors.subject ? (
                <div className="text-red-600 text-xs mt-2">{formik.errors.subject}</div>
              ) : null}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[#0D1F4F]" htmlFor="message">
              Müraciətiniz
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 p-3 w-full border border-[#0D1F4F] rounded-lg text-[#0D1F4F] focus:outline-none focus:ring-2 focus:ring-[#0D1F4F] focus:border-[#0D1F4F]"
              rows={6}
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message ? (
              <div className="text-red-600 text-xs mt-2">{formik.errors.message}</div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-6 bg-[#0D1F4F] text-white rounded-lg hover:bg-[#1a3154] transition duration-300"
            >
              Göndər
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
