import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph } from "@/components/policy-content"

export default function AboutPage() {
  return (
    <PolicyPageLayout title="Sobre Nós">
      <div className="space-y-8">
        <div className="text-center mb-8 border-b border-border pb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[hsl(var(--porto-blue))] mb-3">
            pttopsitesdeapostas.com
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            O guia independente de referência para os melhores sites de apostas desportivas em Portugal
          </p>
        </div>

        <PolicySection title="A Nossa Missão">
          <PolicyParagraph>
            Na pttopsitesdeapostas.com, a nossa missão é simples: fornecer aos apostadores portugueses informações
            precisas, atualizadas e imparciais sobre os melhores sites de apostas desportivas disponíveis no mercado
            nacional. Acreditamos que cada apostador merece aceder a análises honestas e rankings fiáveis antes de
            escolher onde jogar.
          </PolicyParagraph>
          <PolicyParagraph>
            Somos uma equipa de especialistas portugueses com vasta experiência no mercado de apostas desportivas.
            Dedicamos o nosso trabalho a ajudar utilizadores a tomar decisões informadas e a apostar de forma
            responsável e segura.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Análises Independentes" delay={100}>
          <PolicyParagraph>
            Todas as análises publicadas na pttopsitesdeapostas.com são conduzidas de forma completamente independente
            pela nossa equipa. Testamos cada plataforma em profundidade, avaliando a experiência do utilizador, a
            qualidade dos bónus, os métodos de pagamento disponíveis, a velocidade dos levantamentos e a eficácia do
            apoio ao cliente.
          </PolicyParagraph>
          <PolicyParagraph>
            A nossa equipa conhece bem as necessidades e preferências dos apostadores portugueses e trabalha
            continuamente para garantir que os nossos rankings refletem a realidade atual do mercado.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Como Classificamos os Sites de Apostas" delay={200}>
          <PolicyParagraph>
            O nosso sistema de avaliação é abrangente e rigoroso. Cada casa de apostas é analisada com base em seis
            critérios fundamentais:
          </PolicyParagraph>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              {
                title: "Licenciamento e Segurança",
                desc: "Apenas listamos sites devidamente licenciados pelo SRIJ ou outras autoridades competentes. Verificamos encriptação SSL, proteção de dados e protocolos de segurança.",
              },
              {
                title: "Bónus e Promoções",
                desc: "Avaliamos bónus de boas-vindas, promoções contínuas e programas de fidelidade. A nossa equipa lê todos os termos para garantir que são justos e transparentes.",
              },
              {
                title: "Experiência do Utilizador",
                desc: "Testamos o website e as aplicações móveis quanto à facilidade de uso, navegação, velocidade e design geral. Um bom site deve ser acessível a todos os perfis de apostadores.",
              },
              {
                title: "Mercados e Odds",
                desc: "Comparamos a gama de desportos disponíveis, a variedade de apostas e a competitividade das odds para garantir que os utilizadores obtêm o melhor valor.",
              },
              {
                title: "Métodos de Pagamento",
                desc: "Verificamos a diversidade de opções de depósito e levantamento, os tempos de processamento, as taxas aplicadas e os limites estabelecidos por cada operador.",
              },
              {
                title: "Apoio ao Cliente",
                desc: "Testamos a capacidade de resposta e utilidade das equipas de suporte. Valorizamos plataformas com múltiplos canais de contacto e atendimento em português.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border p-5">
                <div className="w-6 h-0.5 bg-[hsl(var(--porto-blue))] mb-3" />
                <h3 className="text-sm font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </PolicySection>

        <PolicySection title="O Nosso Sistema de Pontuação" delay={900}>
          <div className="border border-[hsl(var(--porto-blue))] p-5">
            <PolicyParagraph>
              Cada site de apostas recebe uma pontuação de 0 a 10 com base na nossa avaliação abrangente. A pontuação
              final é calculada como uma média ponderada de todos os critérios, com a segurança e a experiência do
              utilizador a receberem maior peso. Apenas os sites com pontuação superior a 8.0 integram a nossa lista
              recomendada.
            </PolicyParagraph>
            <p className="text-[hsl(var(--porto-blue))] font-bold mt-3 text-sm uppercase tracking-widest">
              Padrão de Excelência: apenas os melhores sites fazem parte da nossa seleção
            </p>
          </div>
        </PolicySection>

        <PolicySection title="Divulgação de Afiliação" delay={1000}>
          <PolicyParagraph>
            A pttopsitesdeapostas.com é parcialmente financiada através de parcerias de afiliação com operadores de
            apostas. Quando se regista através dos nossos links, podemos receber uma comissão. Este modelo permite-nos
            manter o site e continuar a oferecer informação gratuita aos nossos utilizadores. No entanto, isso não
            influencia as nossas análises, classificações ou recomendações. A precisão e os interesses dos utilizadores
            são sempre a nossa prioridade.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Jogo Responsável" delay={1100}>
          <div className="border-l-4 border-[hsl(var(--porto-red))] pl-4 py-2">
            <PolicyParagraph>
              Na pttopsitesdeapostas.com defendemos o jogo responsável como um valor inegociável. As apostas devem ser
              uma fonte de entretenimento e nunca um meio de rendimento ou uma forma de resolver dificuldades
              financeiras. Encorajamos todos os utilizadores a estabelecer limites de depósito, a nunca perseguir
              perdas e a procurar ajuda especializada se o jogo se tornar problemático.
            </PolicyParagraph>
          </div>
        </PolicySection>

        <PolicySection title="A Nossa Equipa" delay={1200}>
          <PolicyParagraph>
            A nossa equipa é formada por especialistas em apostas desportivas, analistas de mercado e profissionais com
            amplo conhecimento do setor em Portugal. Cada membro contribui com perspetivas únicas para garantir que as
            nossas análises são completas, imparciais e atualizadas. Partilhamos uma paixão comum pelo desporto e pelo
            compromisso de ajudar os utilizadores a encontrar as melhores experiências de apostas.
          </PolicyParagraph>
        </PolicySection>

        <PolicySection title="Contacte-nos" delay={1300}>
          <div className="border border-border p-5">
            <PolicyParagraph>
              Tem questões, sugestões ou encontrou informações incorretas? Adoraríamos receber o seu feedback. Entre em
              contacto com a nossa equipa através do email{" "}
              <a href="mailto:info@pttopsitesdeapostas.com" className="text-[hsl(var(--porto-blue))] underline hover:opacity-80">
                info@pttopsitesdeapostas.com
              </a>
            </PolicyParagraph>
            <p className="text-muted-foreground text-sm mt-3">Respondemos a todas as mensagens no prazo de 24 horas úteis.</p>
          </div>
        </PolicySection>
      </div>
    </PolicyPageLayout>
  )
}
