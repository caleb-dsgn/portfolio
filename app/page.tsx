const projects = [
  {
    number: "01",
    year: "2026",
    title: "Consulta Crédito",
    eyebrow: "SaaS B2B · ERP · Fintech",
    summary:
      "Uma consulta que vivia fora do ERP virou um produto multitenant — com planos, dashboards e três níveis de acesso.",
    impact: "8 semanas",
    impactLabel: "para validar a solução",
    image:
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/6d8e239d-d3a8-4f83-82b7-57f8fd57b331_rw_1920.png?h=b16b380e5bbfca06c3125274d70aa120",
    prototype: "https://bit.ly/4vu7e2o",
    oldCase: "https://calebdsgn.myportfolio.com/consulta-credito",
    note: "de gargalo interno → produto revendível",
  },
  {
    number: "02",
    year: "2025",
    title: "Vende+",
    eyebrow: "Product Design · Mobile-first · Sales",
    summary:
      "Redesenhei uma ferramenta de força de vendas limitada ao Android como uma plataforma web simples, rápida e escalável.",
    impact: "1 web app",
    impactLabel: "em qualquer dispositivo",
    image:
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/50614d81-4b26-4be9-aa9b-5949dd769ac9_rw_1920.png?h=23d3d2ecf9d7ea55b8e91b2892d9b803",
    prototype: "https://bit.ly/proto-fdv",
    oldCase: "https://calebdsgn.myportfolio.com/seven",
    note: "APK confuso → catálogo que ajuda a vender",
  },
  {
    number: "03",
    year: "2022",
    title: "Vivaplr",
    eyebrow: "0→1 · HR Tech · Product Strategy",
    summary:
      "Liderei o design ponta a ponta de um MVP para simplificar a gestão de PLR — e ajudei a descobrir um mercado maior.",
    impact: "0 → 1",
    impactLabel: "da ideia aos primeiros clientes",
    image:
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/61744dfd-0286-4bdb-b75b-7ba9cf0433b0_rw_1920.png?h=4f463394f1b099d000a46cbac5591a3b",
    prototype: "https://bit.ly/proto-vivaplr",
    oldCase: "https://calebdsgn.myportfolio.com/kinexa",
    note: "PLR → remuneração variável",
  },
] as const;

const processSteps = [
  ["01", "Entender", "O problema antes da tela"],
  ["02", "Organizar", "Pessoas, regras e jornadas"],
  ["03", "Rabiscar", "Hipóteses rápidas e baratas"],
  ["04", "Testar", "Evidência antes da certeza"],
  ["05", "Entregar", "Decisões que o time entende"],
] as const;

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Caleb Carrijo — início">
          <span className="brand-mark">CC</span>
          <span>
            caleb carrijo
            <small>product designer</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#projetos">projetos</a>
          <a href="#processo">processo</a>
          <a href="#sobre">sobre</a>
        </nav>
        <a className="header-cta" href="mailto:clbdsgnr@gmail.com">
          vamos conversar <Arrow />
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" />
          aberto a boas conversas
        </div>

        <div className="hero-copy">
          <p className="hand-note note-one">começar pelo porquê ↓</p>
          <h1>
            Transformo problemas
            <span className="circled"> confusos </span>
            em experiências simples.
          </h1>
          <p className="hero-intro">
            Oi, sou o Caleb — Product Designer que conecta estratégia, processos
            e interface para tirar produtos do rascunho e colocar boas ideias em
            movimento.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              ver projetos <span aria-hidden="true">↓</span>
            </a>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/caleb-carrijo/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin <Arrow />
            </a>
          </div>
        </div>

        <div className="hero-blueprint" aria-label="Fluxo: problema, hipótese e produto">
          <p className="blueprint-label">mapa do trabalho</p>
          <div className="flow-node node-problem">
            <span>01</span>
            problema
          </div>
          <span className="flow-arrow arrow-one" aria-hidden="true">
            ⟶
          </span>
          <div className="flow-node node-hypothesis">
            <span>02</span>
            hipótese
          </div>
          <span className="flow-arrow arrow-two" aria-hidden="true">
            ⟶
          </span>
          <div className="flow-node node-product">
            <span>03</span>
            produto
          </div>
          <div className="mini-wireframe wire-one">
            <i />
            <b />
            <b />
          </div>
          <div className="mini-wireframe wire-two">
            <i />
            <b />
            <b />
          </div>
          <p className="hand-note blueprint-note">testar antes de polir!</p>
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <span>role para explorar</span>
          <i />
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <div className="section-heading">
          <div>
            <p className="section-index">[ trabalhos selecionados ]</p>
            <h2>Do rabisco ao resultado.</h2>
          </div>
          <p>
            Três produtos, diferentes níveis de complexidade e uma coisa em
            comum: decisões de design que moveram o negócio.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <span>{project.number}</span>
                <span>{project.year}</span>
              </div>
              <div className="project-content">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-links">
                  <a
                    className="button button-small"
                    href={project.prototype}
                    target="_blank"
                    rel="noreferrer"
                  >
                    abrir protótipo <Arrow />
                  </a>
                  <a
                    className="text-link"
                    href={project.oldCase}
                    target="_blank"
                    rel="noreferrer"
                  >
                    case atual <Arrow />
                  </a>
                </div>
              </div>
              <div className="project-visual">
                <div className="tape" aria-hidden="true" />
                <img
                  src={project.image}
                  alt={`Visão do projeto ${project.title}`}
                />
                <p className="hand-note project-note">{project.note}</p>
              </div>
              <div className="project-impact">
                <strong>{project.impact}</strong>
                <span>{project.impactLabel}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="process section-shell" id="processo">
        <div className="section-heading">
          <div>
            <p className="section-index">[ como eu trabalho ]</p>
            <h2>Processo é direção, não receita.</h2>
          </div>
          <p>
            Cada desafio pede um caminho. O desenho muda, mas a intenção é
            sempre reduzir incerteza antes de aumentar a fidelidade.
          </p>
        </div>

        <div className="process-flow">
          {processSteps.map(([number, title, description], index) => (
            <div className="process-step" key={title}>
              <span className="step-number">{number}</span>
              <div className="step-dot" aria-hidden="true" />
              <h3>{title}</h3>
              <p>{description}</p>
              {index < processSteps.length - 1 && (
                <span className="step-line" aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        <div className="process-sketch" aria-hidden="true">
          <div className="sketch-screen">
            <span />
            <i />
            <i />
          </div>
          <span className="sketch-arrow">⤴</span>
          <p className="hand-note">rabiscoframes &gt; achismos</p>
        </div>
      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-stamp">
          <span>Product</span>
          <strong>DESIGNER</strong>
          <span>Brasil · remoto</span>
        </div>
        <div className="about-copy">
          <p className="section-index">[ um pouco sobre mim ]</p>
          <h2>Curioso por natureza. Designer por prática.</h2>
          <p>
            Gosto de entrar em problemas complexos, fazer as perguntas certas e
            construir clareza junto com o time. Minha atuação atravessa discovery,
            arquitetura de informação, fluxos, prototipação e interface.
          </p>
          <p className="about-placeholder">
            Mais sobre trajetória, repertório e vida fora das telas entra aqui
            na próxima versão.
          </p>
          <div className="skill-cloud" aria-label="Competências">
            {[
              "Product Design",
              "UX Strategy",
              "User Flows",
              "Wireframes",
              "UI Design",
              "Prototipação",
              "Discovery",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <p className="hand-note">tem um problema interessante?</p>
        <h2>Vamos desenhar o próximo passo.</h2>
        <a className="footer-email" href="mailto:clbdsgnr@gmail.com">
          clbdsgnr@gmail.com <Arrow />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Caleb Carrijo</span>
          <div>
            <a
              href="https://www.linkedin.com/in/caleb-carrijo/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://wa.me/5544991525794"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <a href="#top">voltar ao topo ↑</a>
        </div>
      </footer>
    </main>
  );
}
