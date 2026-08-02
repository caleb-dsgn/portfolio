"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    year: "2026",
    title: "Consulta Crédito",
    eyebrow: "SaaS B2B · ERP",
    summary:
      "Uma consulta que vivia fora do ERP virou um produto multitenant — com planos, dashboards e três níveis de acesso.",
    impact: "8 semanas",
    impactLabel: "para validar a solução",
    image:
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/6d8e239d-d3a8-4f83-82b7-57f8fd57b331_rw_1920.png?h=b16b380e5bbfca06c3125274d70aa120",
    prototype: "https://bit.ly/4vu7e2o",
    oldCase: "https://calebdsgn.myportfolio.com/consulta-credito",
    note: "de gargalo interno → produto revendível",
    challenge:
      "O ERP possuía um gargalo operacional: clientes precisavam sair do sistema para consultar crédito PF/PJ e depois inserir os dados manualmente. Durante o processo, identificamos uma oportunidade maior — transformar a funcionalidade em um produto revendível.",
    roleIntro:
      "Minha atuação foi além do design visual, conectando a lógica do sistema, a viabilidade técnica e a visão de negócio.",
    roleItems: [
      {
        title: "Discovery técnico",
        text: "Analisei a API do Serasa e trabalhei com o arquiteto de software para alinhar restrições técnicas, arquitetura da informação e fluxos.",
      },
      {
        title: "SaaS multitenancy",
        text: "Projetei a experiência para três níveis de permissão: Administração, Parceiros e Clientes Finais.",
      },
      {
        title: "Documentação",
        text: "Defini a taxonomia do sistema e construí a primeira versão do PRD, aproximando negócio e desenvolvimento.",
      },
    ],
    resultTitle: "Inovação em UX e negócio",
    result:
      "Criei um módulo de planos para parametrizar limites, relatórios e preços em lote, além de introduzir dashboards para acompanhar consultas, operação financeira e uso da API. Os fluxos e protótipos anteciparam obstáculos técnicos e reduziram o ciclo de validação para 8 semanas.",
    gallery: [
      "/cases/consulta-credito-telas.png",
    ],
  },
  {
    number: "02",
    year: "2025",
    title: "Vende+",
    eyebrow: "ERP · Mobile-first · Sales",
    summary:
      "Redesenhei uma ferramenta de força de vendas limitada ao Android como uma plataforma web simples, rápida e escalável.",
    impact: "1 web app",
    impactLabel: "em qualquer dispositivo",
    image:
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/50614d81-4b26-4be9-aa9b-5949dd769ac9_rw_1920.png?h=23d3d2ecf9d7ea55b8e91b2892d9b803",
    prototype: "https://bit.ly/proto-fdv",
    oldCase: "https://calebdsgn.myportfolio.com/seven",
    note: "catálogo amigável para o vendedor, conectado ao ERP",
    challenge:
      "O produto original era um app Android distribuído via APK, com interface datada e fluxos confusos. Além do alto custo de manutenção, vendedores que usavam iPhone não conseguiam acessar a ferramenta.",
    roleIntro:
      "Liderei a transição da experiência mobile nativa para uma plataforma web mobile-first, introduzindo também os primeiros processos de UX da empresa.",
    roleItems: [
      {
        title: "Discovery e testes",
        text: "Realizei imersões com analistas e com os times de suporte e CX para entender como o catálogo era usado sob pressão e em movimento.",
      },
      {
        title: "Tech + design",
        text: "Propus Material UI para acelerar o MVP, garantir consistência e aproveitar componentes maduros.",
      },
      {
        title: "Processo de UX",
        text: "Estruturei arquitetura da informação, fluxos e protótipos de alta fidelidade em um contexto ainda sem cultura formal de design.",
      },
    ],
    resultTitle: "Uma experiência feita para vender",
    result:
      "Substituí listas densas e tabelas com scroll lateral por cards que tornam fotos, preços e estoque imediatamente visíveis. A versão web reduziu custos de manutenção, teve forte aceitação no beta e criou uma base escalável para novos produtos.",
    gallery: [
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/3eb2d569-cfd8-46bd-ab0d-8e46a89378df_rw_1920.png?h=f23ad971e320dabb6318973e475e4821",
    ],
  },
  {
    number: "03",
    year: "2022",
    title: "Vivaplr",
    eyebrow: "0→1 · HR Tech · MVP",
    summary:
      "Liderei o design ponta a ponta de um MVP para simplificar a gestão de PLR — e ajudei a descobrir um mercado maior.",
    impact: "0 → 1",
    impactLabel: "da ideia aos primeiros clientes",
    image:
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/61744dfd-0286-4bdb-b75b-7ba9cf0433b0_rw_1920.png?h=4f463394f1b099d000a46cbac5591a3b",
    prototype: "https://bit.ly/proto-vivaplr",
    oldCase: "https://calebdsgn.myportfolio.com/kinexa",
    note: "mercado inexplorado → validação",
    challenge:
      "O projeto nasceu para digitalizar e simplificar a gestão de Programas de Lucros e Resultados. O desafio era transformar regras de negócio complexas em uma experiência transparente para o RH e para os colaboradores.",
    roleIntro:
      "Foi minha primeira liderança de um produto 0→1. Conduzi o ciclo completo do MVP, da proposta de valor aos protótipos prontos para desenvolvimento.",
    roleItems: [
      {
        title: "Discovery e estratégia",
        text: "Participei de workshops de criação de produto com o SEBRAE para refinar a proposta de valor e investigar as dores do mercado de remuneração.",
      },
      {
        title: "Arquitetura",
        text: "Estruturei jornadas e fluxos capazes de suportar cálculos e regras complexas sem comprometer a usabilidade.",
      },
      {
        title: "Prototipação",
        text: "Conduzi a evolução de wireframes de baixa fidelidade até protótipos interativos de alta fidelidade no Figma.",
      },
    ],
    resultTitle: "Validação e pivotagem",
    result:
      "O processo revelou que a oportunidade era maior do que PLR: a solução precisava contemplar remuneração variável de forma ampla. Essa mudança validou o mercado, trouxe os primeiros clientes e transformou a ideia em um produto escalável.",
    gallery: [
      "https://cdn.myportfolio.com/01b591eb-f51f-4e85-811c-0007a2c0207c/7247ebb5-699e-4037-85c5-655f9d38e186_rw_1920.png?h=c372e7fddb440f904f5e0b9d85a4c3d9",
    ],
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
  const [activeProject, setActiveProject] =
    useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    if (!activeProject) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };

    document.body.classList.add("modal-open");
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeProject]);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Caleb Carrijo — início">
          <img
            className="brand-mark"
            src="/brand-icon.png"
            alt=""
            aria-hidden="true"
          />
          <span>
            caleb carrijo
            <small>product designer</small>
          </span>
        </a>
        <nav className="header-socials" aria-label="Redes sociais">
          <a
            href="https://www.linkedin.com/in/caleb-carrijo/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <span aria-hidden="true">in</span>
          </a>
          <a
            href="https://wa.me/5544991525794"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
          >
            <img className="social-brand-icon" src="/whatsapp.svg" alt="" aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="hand-note note-one">começar pelo porquê ↓</p>
          <h1>
            Transformo problemas
            <span className="circled"> confusos </span>
            em experiências simples.
          </h1>
          <p className="hero-intro">
            Trabalho na interseção entre design, tecnologia e negócio, ajudando
            equipes a transformar ideias e necessidades complexas em soluções
            claras, úteis e escaláveis.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projetos">
              ver projetos <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>

        <div className="hero-blueprint-static">
          <img
            src="/hero-blueprint.png"
            alt="Fluxo desenhado: problema, hipótese, validação e solução"
          />
        </div>

        <div className="scroll-hint" aria-hidden="true">
          <img src="/scroll-arrow.svg" alt="" />
        </div>
      </section>

      <section className="projects section-shell" id="projetos">
        <div className="section-heading">
          <div>
            <p className="section-index">[ alguns trabalhos ]</p>
          </div>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-meta">
                <span>{project.number}</span>
              </div>
              <div className="project-content">
                <div className="project-eyebrow">
                  <p className="eyebrow">{project.eyebrow}</p>
                  <span>{project.year}</span>
                </div>
                <h3>{project.title}</h3>
                <p className="project-summary">{project.summary}</p>
                <div className="project-links">
                  <button
                    type="button"
                    className="button button-small"
                    onClick={() => setActiveProject(project)}
                    aria-haspopup="dialog"
                  >
                    abrir case <Arrow />
                  </button>
                </div>
              </div>
              <button
                type="button"
                className="project-visual"
                onClick={() => setActiveProject(project)}
                aria-label={`Abrir case ${project.title}`}
                aria-haspopup="dialog"
              >
                <div className="tape" aria-hidden="true" />
                <img
                  src={project.image}
                  alt={`Visão do projeto ${project.title}`}
                />
              </button>
              <div className="project-impact">
                <em>{project.note}</em>
              </div>
            </article>
          ))}
        </div>
      </section>

      {activeProject && (
        <div
          className="case-modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setActiveProject(null);
          }}
        >
          <section
            className="case-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="case-modal-title"
          >
            <button
              className="case-modal-close"
              type="button"
              onClick={() => setActiveProject(null)}
              aria-label="Fechar case"
              autoFocus
            >
              fechar ×
            </button>

            <div className="case-modal-header">
              <div>
                <p className="section-index">
                  [ case {activeProject.number} · {activeProject.year} ]
                </p>
                <p className="eyebrow">{activeProject.eyebrow}</p>
                <h2 id="case-modal-title">{activeProject.title}</h2>
              </div>
              <p className="case-modal-summary">{activeProject.summary}</p>
            </div>

            <div className="case-modal-visual">
              <span className="tape" aria-hidden="true" />
              <img
                src={activeProject.image}
                alt={`Visão ampliada do projeto ${activeProject.title}`}
              />
            </div>

            <div className="case-modal-details">
              <article className="case-story case-challenge">
                <p className="section-index">[ o desafio ]</p>
                <h3>Entender antes de desenhar.</h3>
                <p>{activeProject.challenge}</p>
              </article>

              <article className="case-story case-role">
                <p className="section-index">[ minha atuação ]</p>
                <h3>Do contexto à solução.</h3>
                <p>{activeProject.roleIntro}</p>
                <div className="case-role-list">
                  {activeProject.roleItems.map((item, index) => (
                    <div key={item.title}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </article>

              <div className="case-gallery" aria-label="Imagens do protótipo">
                {activeProject.gallery.map((image, index) => (
                  <figure key={image}>
                    {index === 0 && <span className="tape" aria-hidden="true" />}
                    <img
                      src={image}
                      alt={`Tela ${index + 1} do projeto ${activeProject.title}`}
                    />
                  </figure>
                ))}
              </div>

              <article className="case-story case-result">
                <p className="section-index">[ resultado ]</p>
                <h3>{activeProject.resultTitle}</h3>
                <p>{activeProject.result}</p>
              </article>
            </div>
          </section>
        </div>
      )}

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

        <div className="process-workbench">
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

          <div
            className="sketch-gallery"
            aria-label="Rabiscoframes e fluxos desenhados à mão"
          >
            <figure className="sketch-photo sketch-main">
              <span className="tape" aria-hidden="true" />
              <img
                src="/rabiscoframes/exploracoes-interface.jpg"
                alt="Oito explorações de interface desenhadas à mão"
              />
            </figure>
            <figure className="sketch-photo sketch-calculation">
              <span className="tape" aria-hidden="true" />
              <img
                src="/rabiscoframes/fluxo-calculo.jpg"
                alt="Fluxo de cálculo e seus estados desenhados à mão"
              />
            </figure>
            <figure className="sketch-photo sketch-product">
              <span className="tape" aria-hidden="true" />
              <img
                src="/rabiscoframes/mapa-produto.jpg"
                alt="Mapa de produto com conexões e anotações"
              />
            </figure>
            <figure className="sketch-photo sketch-signup">
              <img
                src="/rabiscoframes/fluxo-cadastro.jpg"
                alt="Fluxo de cadastro e navegação desenhado à mão"
              />
            </figure>
            <figure className="sketch-photo sketch-template">
              <img
                src="/rabiscoframes/fluxo-template.jpg"
                alt="Fluxo de criação por templates desenhado à mão"
              />
            </figure>
          </div>
        </div>

      </section>

      <section className="about section-shell" id="sobre">
        <div className="about-portrait">
          <div className="tape" aria-hidden="true" />
          <img
            src="/avatar-working-radiohead-wordmark.png"
            alt="Avatar de Caleb trabalhando em wireframes ao lado de um notebook"
          />
        </div>
        <div className="about-copy">
          <p className="section-index">[ um pouco sobre mim ]</p>
          <h2>Oi, me chamo Caleb.</h2>
          <p>
            Designer de Produto com 5 anos de experiência na criação e evolução
            de produtos digitais. Minha atuação envolve desde discovery e
            definição de problemas até a construção de experiências orientadas a
            impacto.
          </p>
          <p>
            Com background em marketing, negócios e comercial, desenvolvi uma
            visão de produto que vai além da interface, considerando também
            posicionamento, valor, adoção e retenção. Estou habituado a ambientes
            de inovação e experimentação, onde utilizo o design como ferramenta
            estratégica para trazer clareza, orientar decisões e estruturar novos
            produtos.
          </p>
        </div>
        <div className="about-skills">
          <div className="skill-block">
            <p className="skill-label">[ competências ]</p>
            <div className="skill-cloud" aria-label="Competências">
              {[
                "UI Design",
                "UX Design",
                "Product Discovery",
                "Análise de Dados",
                "Testes de Usabilidade",
                "Design de Interação",
                "Design System e Atomic Design",
                "Arquitetura da Informação",
                "Facilitação de Workshops",
                "Metodologias Ágeis",
              ].map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
          <div className="skill-block tools-block">
            <p className="skill-label">[ ferramentas ]</p>
            <div className="skill-cloud" aria-label="Ferramentas">
            {[
              "Figma",
              "WordPress",
              "Framer",
              "HTML/CSS",
              "Google Analytics",
              "Clarity",
              "PostHog",
              "HotJar",
              "Maze",
              "Miro",
              "Jira",
              "Notion",
              "ClickUp",
              "Trello",
              "Google Workspace",
            ].map((skill) => (
              <span key={skill}>{skill}</span>
            ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <p className="hand-note">tem um problema e precisa de uma mãozinha?</p>
        <h2>Vamos desenhar o próximo passo.</h2>
        <a
          className="footer-email"
          href="https://wa.me/5544991525794"
          target="_blank"
          rel="noreferrer"
        >
          fale comigo <Arrow />
        </a>
        <div className="footer-bottom">
          <a className="footer-top" href="#top">voltar ao topo ↑</a>
          <span className="footer-copy">© 2026 caleb.dsgn</span>
        </div>
      </footer>
    </main>
  );
}
