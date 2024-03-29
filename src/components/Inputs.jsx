const Inputs = ({ cliente }) => {
    return (
        <>
            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="name"
                >
                    Nombre:
                </label>
                <input
                    id="name"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Nombre del Cliente"
                    name="name"
                    defaultValue={ cliente?.name }
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="company"
                >
                    Empresa:
                </label>
                <input
                    id="company"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Empresa del Cliente"
                    name="company"
                    defaultValue={ cliente?.company }
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >
                    E-mail:
                </label>
                <input
                    id="email"
                    type="email"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={ cliente?.email }
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="phone"
                >
                    Teléfono:
                </label>
                <input
                    id="phone"
                    type="tel"
                    className="mt-2 block w-full p-3 bg-gray-100"
                    placeholder="Teléfono del Cliente"
                    name="phone"
                    defaultValue={ cliente?.phone }
                />
            </div>

            <div className="mb-4">
                <label
                    className="text-gray-800"
                    htmlFor="notes"
                >
                    Notas:
                </label>
                <textarea
                    as="textarea"
                    id="notes"
                    type="text"
                    className="mt-2 block w-full p-3 bg-gray-100 h-40 align-self"
                    placeholder="Notas del Cliente"
                    name="notes"
                    defaultValue={ cliente?.notes }
                />
            </div>
        </>
    )
}

export default Inputs