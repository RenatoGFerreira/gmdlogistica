import { Cpu, Cloud, ShieldCheck, CheckCircle2 } from 'lucide-react';



export default function Whoweare(){
return(
    <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-12 text-primary-blue">UM SISTEMA COMPLETO</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="feature-card">
                <Cpu size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Torre de controle</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <Cloud size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Validação de fretes conforme contrato</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Acompanhamento Produtivo em fornecedores</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">BPO em áreas relacionadas, como PCM, Comex e afins</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Auxílio na Organização do seu pátio</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Rastreabilidade de veículo</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Redução de erros na expedição</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <ShieldCheck size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Prioridades nos críticos</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
              <div className="feature-card">
                <CheckCircle2 size={48} className="mx-auto text-secondary-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">Comunicação Acertiva com os fornecedores</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Vestibulum in antegestas.
                </p>
              </div>
            </div>
          </div>
        </section>
)
}