"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Bot,
  BrainCircuit,
  Building2,
  Cpu,
  DatabaseZap,
  Factory,
  Gauge,
  Github,
  Globe2,
  Layers3,
  Linkedin,
  LockKeyhole,
  Mail,
  MemoryStick,
  MessageCircle,
  Network,
  Phone,
  Rocket,
  ServerCog,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
  Zap
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 }
};

const differentials = [
  [Gauge, "Performance Extrema", "Arquiteturas validadas para workloads multi-thread, GPU compute e operação 24/7."],
  [ShieldCheck, "Estabilidade Corporativa", "Componentes enterprise, memória ECC, fontes redundantes e testes de burn-in."],
  [Award, "Certificações ISV", "Configurações orientadas para CAD, BIM, DCC, simulação e pipelines profissionais."],
  [BrainCircuit, "IA e Machine Learning", "Estações e servidores GPU para inferência, fine-tuning e dados sensíveis."],
  [Network, "Renderização Distribuída", "Nós otimizados para render farm, storage rápido e escalabilidade por demanda."],
  [Workflow, "Projetos Sob Medida", "Dimensionamento técnico por aplicação, orçamento, SLA e plano de crescimento."],
  [Users, "Suporte Especializado", "Equipe consultiva para pré-venda, implantação, pós-venda e expansão."],
  [Building2, "Garantia Nacional", "Atendimento brasileiro para empresas, integradores, universidades e governo."]
];

const solutions = [
  ["Engenharia e CAD", "Workstations certificáveis para projetos mecânicos, elétricos, civil, simulação e digital twins.", "https://images.unsplash.com/photo-1581093458791-9d42cc030d7c?auto=format&fit=crop&w=900&q=80"],
  ["Inteligência Artificial", "GPU compute com grande VRAM, storage NVMe Gen5 e stack para LLM privado.", "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80"],
  ["Arquitetura e BIM", "Modelagem complexa, coordenação, visualização real-time e renderização fotorrealista.", "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80"],
  ["Produção de Vídeo", "Edição 8K, color grading, composição, VFX e cache local de altíssima velocidade.", "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=900&q=80"],
  ["Ciência de Dados", "Ambientes com CPU de muitos núcleos, memória massiva e aceleração CUDA para analytics.", "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80"],
  ["Virtualização", "Hosts para VDI, laboratórios, clusters privados e workloads corporativos isolados.", "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=80"],
  ["Render Farm", "Nós GPU/CPU coordenados para reduzir filas, prazos e gargalos de pós-produção.", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=900&q=80"],
  ["Governo e Licitações", "Fornecimento técnico, documentação, padronização e projetos para órgãos públicos.", "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80"]
];

const workstations = [
  {
    name: "FL Titan AI X",
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=1100&q=85",
    cpu: "AMD Threadripper PRO 7995WX • 96 cores",
    gpu: "Até 4x RTX 5090 / RTX PRO 6000 Blackwell",
    memory: "512GB DDR5 ECC RDIMM expansível",
    cooling: "Loop térmico custom com pressão positiva",
    storage: "NVMe Gen5 em RAID + hot tier corporativo",
    score: 98
  },
  {
    name: "FL Quantum Render PRO",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1100&q=85",
    cpu: "AMD Threadripper PRO 7985WX • 64 cores",
    gpu: "Dual RTX PRO para viewport e render CUDA",
    memory: "256GB DDR5 ECC de baixa latência",
    cooling: "Airflow acústico premium para operação contínua",
    storage: "12TB NVMe Gen5 + scratch dedicado",
    score: 91
  },
  {
    name: "FL Threadripper Ultra",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85",
    cpu: "AMD Threadripper PRO 7975WX • 32 cores",
    gpu: "RTX 5090 32GB com drivers profissionais",
    memory: "128GB DDR5 ECC validado",
    cooling: "Câmara térmica otimizada para boost sustentado",
    storage: "4TB NVMe Gen5 + backup local criptografado",
    score: 84
  },
  {
    name: "FL Deep Learning Station",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1100&q=85",
    cpu: "AMD Threadripper PRO 7995WX AI-ready",
    gpu: "Multi GPU RTX 5090 com interconnect otimizado",
    memory: "512GB ECC para datasets e feature stores",
    cooling: "Refrigeração custom para treinamento prolongado",
    storage: "NVMe Gen5 high endurance + dataset tier",
    score: 96
  }
];

const testimonials = [
  ["Escritório de engenharia", "Migramos simulações que levavam horas para ciclos previsíveis de minutos, com estabilidade exemplar em modelos CAD massivos."],
  ["Produtora 3D", "A FL dimensionou workstations e nós de render sob medida. A fila de render caiu drasticamente e o suporte é muito técnico."],
  ["Laboratório de IA", "Conseguimos manter modelos e dados sensíveis em infraestrutura local, com GPUs dimensionadas para inferência e fine-tuning."],
  ["Órgão público", "O processo foi conduzido com documentação clara, entrega nacional e configuração aderente às exigências do edital."]
];

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#54ffbf]">{eyebrow}</p>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{subtitle}</p>
    </motion.div>
  );
}

function Particles() {
  return (
    <div aria-hidden className="absolute inset-0 overflow-hidden">
      <div className="grid-mask animate-drift absolute -inset-20 opacity-40" />
      {Array.from({ length: 34 }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-[#54ffbf] shadow-[0_0_18px_#54ffbf]"
          style={{ left: `${(index * 29) % 100}%`, top: `${(index * 47) % 100}%` }}
          animate={{ opacity: [0.18, 1, 0.18], y: [0, -26, 0] }}
          transition={{ duration: 3 + (index % 5), repeat: Infinity, delay: index * 0.08 }}
        />
      ))}
    </div>
  );
}

function BenchmarkPanel() {
  const rows = [["IA Local", 96], ["Render GPU", 92], ["CAD/BIM", 88], ["Simulação", 84]];
  return (
    <div className="glass blue-glow rounded-3xl p-5">
      <div className="mb-5 flex items-center justify-between">
        <span className="text-sm font-semibold text-white">Benchmark FL Performance Matrix</span>
        <span className="rounded-full border border-[#54ffbf]/30 px-3 py-1 text-xs text-[#54ffbf]">Live</span>
      </div>
      <div className="space-y-4">
        {rows.map(([label, value]) => (
          <div key={label}>
            <div className="mb-2 flex justify-between text-xs text-slate-300"><span>{label}</span><span>{value}%</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div className="benchmark-bar h-full rounded-full bg-gradient-to-r from-[#2f8cff] to-[#54ffbf]" style={{ width: `${value}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FL TECNOLOGIA",
    url: "https://fltecnologia.com.br",
    description: "Workstations, servidores GPU, IA privada e infraestrutura corporativa para empresas e governo.",
    areaServed: "BR",
    contactPoint: { "@type": "ContactPoint", contactType: "sales", telephone: "+55-11-99999-0000", availableLanguage: "Portuguese" }
  };

  return (
    <main className="relative overflow-hidden">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0B0F14]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#hero" className="font-display text-xl font-bold tracking-[0.18em] text-white">FL <span className="text-[#54ffbf]">TECNOLOGIA</span></a>
          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#solucoes" className="hover:text-white">Soluções</a>
            <a href="#workstations" className="hover:text-white">Workstations</a>
            <a href="#ia" className="hover:text-white">IA Privada</a>
            <a href="#contato" className="rounded-full bg-white px-4 py-2 font-semibold text-[#0B0F14] hover:bg-[#54ffbf]">Solicitar Cotação</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative min-h-screen pt-28">
        <Particles />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(47,140,255,.22),transparent_34rem)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.05fr_.95fr] lg:px-8 lg:py-24">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="relative z-10">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#2f8cff]/30 bg-[#2f8cff]/10 px-4 py-2 text-sm text-blue-100">
              <Sparkles className="h-4 w-4 text-[#54ffbf]" /> Computação avançada para empresas e governo
            </div>
            <h1 className="font-display max-w-5xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] md:text-7xl lg:text-8xl">
              <span className="text-gradient">Workstations Extremas</span> para IA, Engenharia e Renderização Profissional
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Projetadas para cargas críticas, inteligência artificial, simulação, CAD, 3D, ciência de dados e ambientes corporativos de alta exigência.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contato" className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#2f8cff] to-[#54ffbf] px-7 py-4 font-bold text-[#071018] shadow-[0_18px_70px_rgba(47,140,255,.28)] transition hover:scale-[1.02]">Solicitar Cotação <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" /></a>
              <a href="https://wa.me/5511999990000" className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-7 py-4 font-bold text-white backdrop-blur transition hover:border-[#54ffbf]/60 hover:bg-white/10"><MessageCircle className="h-5 w-5" /> Falar com Especialista</a>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-5">
              {[[MemoryStick, "Até 512GB ECC"], [Cpu, "Multi GPU RTX"], [Zap, "Threadripper PRO"], [DatabaseZap, "PCIe Gen5"], [LockKeyhole, "IA Local"]].map(([Icon, label]) => (
                <div key={label} className="glass rounded-2xl px-4 py-3 text-sm text-slate-200"><Icon className="mb-2 h-5 w-5 text-[#54ffbf]" />{label}</div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.15 }} className="relative z-10">
            <div className="animate-float relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_40px_140px_rgba(47,140,255,.18)]">
              <Image priority src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1400&q=90" alt="Workstation ultra high-end FL TECNOLOGIA" width={1400} height={1100} className="h-[470px] rounded-[1.5rem] object-cover md:h-[640px]" />
              <div className="absolute inset-3 rounded-[1.5rem] bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7"><BenchmarkPanel /></div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Diferenciais" title="Engenharia premium para operação crítica" subtitle="Cada projeto combina performance extrema, estabilidade corporativa, documentação e suporte técnico consultivo." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {differentials.map(([Icon, title, text], index) => (
              <motion.div key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.04 }} className="glass group rounded-3xl p-6 transition hover:-translate-y-2 hover:border-[#54ffbf]/35">
                <Icon className="mb-5 h-8 w-8 text-[#2f8cff] transition group-hover:text-[#54ffbf]" />
                <h3 className="font-display text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="solucoes" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Soluções" title="Arquiteturas para cada workload estratégico" subtitle="Blocos técnicos para engenharia, IA, mídia, ciência de dados, governo e infraestrutura de alto desempenho." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {solutions.map(([title, text, image], index) => (
              <motion.article key={title} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.03 }} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045]">
                <div className="relative h-52 overflow-hidden">
                  <Image src={image} alt={title} width={900} height={600} className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold">{title}</h3>
                  <p className="mt-3 min-h-20 text-sm leading-6 text-slate-300">{text}</p>
                  <a href="#contato" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#54ffbf]">Ver Configurações <ArrowRight className="h-4 w-4" /></a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="workstations" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Catálogo" title="Workstations FL Series sob medida" subtitle="Modelos de referência com processadores Threadripper PRO, GPUs RTX 5090 / RTX PRO, ECC, NVMe Gen5 e refrigeração custom." />
          <div className="grid gap-6 lg:grid-cols-2">
            {workstations.map((item, index) => (
              <motion.article key={item.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ duration: 0.55, delay: index * 0.04 }} className="glass overflow-hidden rounded-[2rem]">
                <div className="relative h-72 overflow-hidden">
                  <Image src={item.image} alt={item.name} width={1100} height={760} className="h-full w-full object-cover transition duration-700 hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F14] via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-full border border-[#54ffbf]/30 bg-[#54ffbf]/10 px-3 py-1 text-xs font-semibold text-[#54ffbf]">Preço sob consulta</div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-3xl font-semibold">{item.name}</h3>
                  <div className="mt-5 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
                    <p><Cpu className="mr-2 inline h-4 w-4 text-[#54ffbf]" />{item.cpu}</p>
                    <p><Bot className="mr-2 inline h-4 w-4 text-[#54ffbf]" />{item.gpu}</p>
                    <p><MemoryStick className="mr-2 inline h-4 w-4 text-[#54ffbf]" />{item.memory}</p>
                    <p><Sparkles className="mr-2 inline h-4 w-4 text-[#54ffbf]" />{item.cooling}</p>
                    <p className="sm:col-span-2"><DatabaseZap className="mr-2 inline h-4 w-4 text-[#54ffbf]" />{item.storage}</p>
                  </div>
                  <div className="mt-6">
                    <div className="mb-2 flex justify-between text-xs text-slate-400"><span>Índice visual de performance</span><span>{item.score}/100</span></div>
                    <div className="h-3 rounded-full bg-white/10"><div className="benchmark-bar h-3 rounded-full bg-gradient-to-r from-[#2f8cff] to-[#54ffbf]" style={{ width: `${item.score}%` }} /></div>
                  </div>
                  <a href="#contato" className="mt-7 inline-flex rounded-full bg-white px-5 py-3 text-sm font-bold text-[#0B0F14] transition hover:bg-[#54ffbf]">Solicitar Projeto</a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="ia" className="relative px-5 py-24 lg:px-8">
        <div className="absolute inset-x-0 top-20 mx-auto h-72 max-w-5xl rounded-full bg-[#2f8cff]/10 blur-3xl" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <SectionTitle eyebrow="Infraestrutura para IA" title="LLM privado, inferência local e automação empresarial" subtitle="Servidores GPU e workstations integradas para treinar, servir e automatizar modelos com dados sensíveis dentro da sua operação." />
          <div className="glass rounded-[2rem] p-7">
            <div className="grid h-80 grid-cols-12 items-end gap-2 rounded-3xl border border-white/10 bg-[#071018] p-5">
              {Array.from({ length: 36 }).map((_, index) => (
                <span key={index} className="rounded-t bg-gradient-to-t from-[#2f8cff] to-[#54ffbf]" style={{ height: `${24 + ((index * 17) % 76)}%`, animation: `pulseLine ${1.8 + (index % 6) * 0.22}s ease-in-out infinite` }} />
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 grid gap-4 md:grid-cols-3">
            {[[ServerCog, "Servidores GPU", "Chassis e nós de alta densidade para clusters, inferência e processamento distribuído."], [LockKeyhole, "API privada de IA", "Modelos internos, governança, autenticação e integração com sistemas empresariais."], [Factory, "Automação empresarial", "Fluxos inteligentes para documentos, atendimento, análise de dados e operações críticas."], [Layers3, "Treinamento de modelos", "Storage rápido, VRAM, ECC e thermal design para ciclos prolongados de treinamento."], [Globe2, "Inferência local", "Baixa latência, proteção de dados e operação independente de nuvem pública."], [Rocket, "Processamento distribuído", "Render, simulação e IA escalando por nós conforme demanda do negócio."]].map(([Icon, title, text]) => (
              <div key={title} className="glass rounded-3xl p-6"><Icon className="mb-4 h-7 w-7 text-[#54ffbf]" /><h3 className="font-display text-xl font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-300">{text}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-white/[0.09] to-white/[0.025] p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-[#54ffbf]">Por que a FL TECNOLOGIA</p>
              <h2 className="font-display text-3xl font-semibold md:text-5xl">Integração enterprise com atendimento consultivo brasileiro</h2>
            </div>
            <p className="text-lg leading-8 text-slate-300">Atuamos no desenho, fornecimento e suporte de soluções personalizadas para empresas, governo e ambientes técnicos que exigem estabilidade, previsibilidade e alto desempenho. Do levantamento do workload à entrega nacional, cada projeto nasce com visão de ciclo de vida, documentação e expansão.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {[["+200", "projetos"], ["+1PB", "processados"], ["+99.9%", "estabilidade"], ["Brasil", "atendimento nacional"]].map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-white/10 bg-[#0B0F14]/55 p-6"><strong className="font-display text-4xl text-gradient">{value}</strong><p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="Depoimentos" title="Confiança de operações técnicas exigentes" subtitle="Relatos fictícios representando cenários corporativos atendidos por arquiteturas FL TECNOLOGIA." />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {testimonials.map(([role, quote]) => (
              <div key={role} className="glass rounded-3xl p-6"><div className="mb-5 flex gap-1 text-[#54ffbf]">★★★★★</div><p className="text-sm leading-7 text-slate-200">“{quote}”</p><p className="mt-6 text-sm font-bold text-white">{role}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2.5rem] border border-[#54ffbf]/20 bg-[#071018] p-6 shadow-[0_30px_120px_rgba(84,255,191,.08)] md:p-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.32em] text-[#54ffbf]">Contato</p>
            <h2 className="font-display text-4xl font-semibold md:text-6xl">Solicite uma Workstation Projetada para o Seu Cenário</h2>
            <p className="mt-6 text-lg leading-8 text-slate-300">Conte sobre seu workload, aplicações, equipe e prazo. Um especialista FL retorna com uma recomendação técnica e comercial para sua operação.</p>
            <div className="mt-8 space-y-3 text-slate-300"><p><Phone className="mr-3 inline h-5 w-5 text-[#54ffbf]" />+55 (11) 99999-0000</p><p><Mail className="mr-3 inline h-5 w-5 text-[#54ffbf]" />contato@afclimatech.com.br</p></div>
          </div>
          <form className="glass grid gap-4 rounded-[2rem] p-5 md:grid-cols-2" action="mailto:contato@afclimatech.com.br">
            {[["Nome", "text"], ["Empresa", "text"], ["E-mail", "email"], ["WhatsApp", "tel"]].map(([label, type]) => (<label key={label} className="text-sm text-slate-300">{label}<input required type={type} className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#54ffbf]" /></label>))}
            <label className="text-sm text-slate-300">Segmento<select className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#54ffbf]"><option>Engenharia / CAD</option><option>IA / Dados</option><option>Arquitetura / BIM</option><option>Vídeo / 3D</option><option>Governo</option><option>Outro</option></select></label>
            <label className="text-sm text-slate-300 md:col-span-2">Necessidade<textarea rows={5} className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 outline-none transition focus:border-[#54ffbf]" placeholder="Descreva aplicações, orçamento, prazos, GPUs, memória, storage ou edital." /></label>
            <button className="md:col-span-2 rounded-full bg-gradient-to-r from-[#2f8cff] to-[#54ffbf] px-7 py-4 font-bold text-[#071018] transition hover:scale-[1.01]">Enviar solicitação técnica</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-12 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-4">
          <div className="md:col-span-2"><h2 className="font-display text-2xl font-bold tracking-[0.18em]">FL <span className="text-[#54ffbf]">TECNOLOGIA</span></h2><p className="mt-4 max-w-md text-sm leading-6 text-slate-400">Workstations, servidores, IA privada, renderização e infraestrutura de TI para operações corporativas críticas.</p><p className="mt-4 text-sm text-slate-500">CNPJ 34.630.857/0001-07</p></div>
          <div><h3 className="font-semibold">Links rápidos</h3><div className="mt-4 grid gap-2 text-sm text-slate-400"><a href="#solucoes">Soluções</a><a href="#workstations">Workstations</a><a href="#ia">Infraestrutura para IA</a><a href="#contato">Contato</a></div></div>
          <div><h3 className="font-semibold">Redes e contato</h3><div className="mt-4 flex gap-3"><a aria-label="LinkedIn" className="rounded-full border border-white/10 p-3 hover:border-[#54ffbf]" href="#"><Linkedin className="h-5 w-5" /></a><a aria-label="GitHub" className="rounded-full border border-white/10 p-3 hover:border-[#54ffbf]" href="#"><Github className="h-5 w-5" /></a><a aria-label="WhatsApp" className="rounded-full border border-white/10 p-3 hover:border-[#54ffbf]" href="https://wa.me/5511999990000"><MessageCircle className="h-5 w-5" /></a></div></div>
        </div>
      </footer>

      <a aria-label="WhatsApp FL TECNOLOGIA" href="https://wa.me/5511999990000" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_60px_rgba(37,211,102,.35)] transition hover:scale-110"><MessageCircle className="h-7 w-7" /></a>
    </main>
  );
}
