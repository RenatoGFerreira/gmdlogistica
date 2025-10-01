export default function Contacts() {
  return (
    <section id="contact" className="py-20 bg-light-gray">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Lado do Depoimento */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-primary-blue">
            O que nossos clientes dizem
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 italic mb-4">
            &quot;Com a GMD Logística, a organização no pátio reduziu mais de 22% do custo de perdas logísticas.&ldquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
              <div>
                <p className="font-bold">Heitor Neves</p>
                <p className="text-sm text-gray-500">CEO da InovaTech</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado do Formulário */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-primary-blue">
            Entre em Contato
          </h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Telefone
              </label>
              <input
                type="phone"
                id="phone"
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-secondary-blue focus:border-secondary-blue"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-accent-yellow text-primary-blue font-bold py-3 px-8 rounded-full hover:bg-yellow-300 transition duration-300"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
