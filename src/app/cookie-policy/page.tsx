import { PolicyPageLayout } from "@/components/policy-page-layout"
import { PolicySection, PolicyParagraph, PolicyList } from "@/components/policy-content"

export default function CookiePolicyPage() {
  return (
    <PolicyPageLayout
      title="Política de Cookies"
      lastUpdated="18 de Abril de 2025"
    >
      <PolicySection title="O Que São Cookies">
        <PolicyParagraph>
          Os cookies são pequenos ficheiros de texto guardados no seu dispositivo quando visita um site. São amplamente
          utilizados para tornar os sites mais eficientes, melhorar a experiência do utilizador e fornecer informações
          analíticas aos proprietários do site.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Como Utilizamos Cookies" delay={100}>
        <PolicyParagraph>
          Na pttopsitesdeapostas.com utilizamos cookies para:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Garantir o correto funcionamento do site",
            "Memorizar as suas preferências entre visitas",
            "Melhorar a velocidade e segurança do site",
            "Analisar o comportamento de navegação de forma anónima",
            "Aperfeiçoar continuamente os nossos conteúdos e serviços",
            "Tornar a publicidade apresentada mais relevante para o seu perfil",
          ]}
        />
      </PolicySection>

      <PolicySection title="Tipos de Cookies que Utilizamos" delay={200}>
        <div className="space-y-4 mt-2">
          {[
            {
              title: "Cookies Essenciais",
              color: "porto-blue",
              desc: "Necessários para o funcionamento básico do site. Permitem funcionalidades fundamentais como segurança e gestão de sessão. A desativação destes cookies pode comprometer o correto funcionamento do site.",
            },
            {
              title: "Cookies de Desempenho",
              color: "muted-foreground",
              desc: "Recolhem informações anónimas sobre a forma como os visitantes interagem com o site. Permitem-nos identificar páginas populares e melhorar a experiência de navegação.",
            },
            {
              title: "Cookies de Funcionalidade",
              color: "porto-blue",
              desc: "Permitem que o site memorize as suas escolhas, como preferências de idioma ou região, proporcionando uma experiência mais personalizada.",
            },
            {
              title: "Cookies de Marketing",
              color: "muted-foreground",
              desc: "Registam a sua visita e as páginas consultadas para apresentar publicidade mais relevante para os seus interesses, tanto no nosso site como noutras plataformas.",
            },
          ].map((type) => (
            <div key={type.title} className="border border-border p-4">
              <div className="w-5 h-0.5 bg-[hsl(var(--porto-blue))] mb-2" />
              <h3 className="text-sm font-bold text-foreground mb-2">{type.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{type.desc}</p>
            </div>
          ))}
        </div>
      </PolicySection>

      <PolicySection title="Cookies de Terceiros" delay={300}>
        <PolicyParagraph>
          Em alguns casos, utilizamos cookies fornecidos por parceiros de confiança:
        </PolicyParagraph>
        <PolicyList
          items={[
            "Google Analytics: utilizado para analisar o tráfego do site e compreender como os utilizadores interagem com os nossos conteúdos, de forma anónima e agregada.",
            "Parceiros de publicidade: podem definir cookies para apresentar publicidade personalizada com base nos seus interesses e padrões de navegação.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Como Gerir Cookies" delay={400}>
        <PolicyParagraph>
          A maioria dos navegadores permite controlar os cookies através das definições de privacidade. Pode optar por
          bloquear todos os cookies, aceitar apenas cookies de primeira parte ou ser notificado sempre que um cookie é
          definido. Para mais informações, visite www.aboutcookies.org.
        </PolicyParagraph>
        <PolicyParagraph>
          Para desativar o rastreamento pelo Google Analytics em todos os sites, visite a ferramenta de exclusão
          disponível em tools.google.com/dlpage/gaoptout.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Alterações à Política de Cookies" delay={500}>
        <PolicyParagraph>
          Podemos atualizar esta política periodicamente para refletir alterações nas tecnologias utilizadas ou em
          requisitos legais. A data de última atualização será sempre indicada no topo desta página.
        </PolicyParagraph>
      </PolicySection>

      <PolicySection title="Contacte-nos" delay={600}>
        <PolicyParagraph>
          Se tiver questões sobre a nossa utilização de cookies, contacte-nos através de:
          privacidade@pttopsitesdeapostas.com
        </PolicyParagraph>
      </PolicySection>
    </PolicyPageLayout>
  )
}
