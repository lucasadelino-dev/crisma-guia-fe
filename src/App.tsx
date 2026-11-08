import { useEffect, useState, type ReactNode } from 'react';
import {
  ArrowRight, ArrowUpRight, BookHeart, BookOpen, CalendarDays, Check,
  CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, CircleHelp,
  Clock3, Compass, Cross, Crown, ExternalLink, Feather, Flame, Flower2,
  HandHeart, Heart, Home, Leaf, Menu, Monitor, RotateCcw, Scale,
  ShieldCheck, Sparkles, Sun, X, type LucideIcon
} from 'lucide-react';
import {
  SOURCE, capitalSins, commandments, fruits, gifts, mysteries,
  prayers, saints, weekDays, weekMysteries,
  type MysteryGroupId, type Page,
} from './content';

const routes: { id: Page; title: string; label: string; icon: LucideIcon }[] = [
  { id: 'inicio', title: 'Início', label: 'Início', icon: Home },
  { id: 'rosario', title: 'Santo Rosário', label: 'Rosário', icon: Flower2 },
  { id: 'moral', title: 'Pecado mortal e venial', label: 'Vida moral', icon: BookOpen },
  { id: 'capitais', title: 'Sete pecados capitais', label: 'Capitais', icon: Scale },
  { id: 'crisma', title: 'Crisma e dons', label: 'Crisma', icon: Flame },
  { id: 'exame', title: 'Exame de consciência', label: 'Exame', icon: CheckCircle2 },
  { id: 'santos', title: 'Santos e devoções', label: 'Santos', icon: Heart },
];

function currentPage(): Page {
  const hash = window.location.hash.replace('#/', '') as Page;
  return routes.some((route) => route.id === hash) ? hash : 'inicio';
}

function Ref({ label, href }: { label: string; href: string }) {
  return <a className="reference" href={href} target="_blank" rel="noopener noreferrer">
    <BookOpen size={14} aria-hidden="true" /> {label} <ArrowUpRight size={13} aria-hidden="true" />
  </a>;
}

function PageHeading({ eyebrow, title, description, children }: {
  eyebrow: string; title: string; description: string; children?: ReactNode;
}) {
  return <section className="page-heading">
    <p className="eyebrow"><span className="eyebrow-line" />{eyebrow}</p>
    <h1>{title}</h1>
    <p className="page-lead">{description}</p>
    {children && <div className="page-heading-extra">{children}</div>}
  </section>;
}

function SectionTitle({ eyebrow, title, description }: {
  eyebrow?: string; title: string; description?: string;
}) {
  return <div className="section-title">
    {eyebrow && <p className="eyebrow small-eyebrow">{eyebrow}</p>}
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>;
}

function FeatureCard({ icon: Icon, overline, title, description, onClick, tone = 'sage' }: {
  icon: LucideIcon; overline: string; title: string; description: string;
  onClick: () => void; tone?: 'sage' | 'rose' | 'sand' | 'blue';
}) {
  return <button type="button" className={'feature-card tone-' + tone} onClick={onClick}>
    <span className="feature-icon"><Icon size={25} strokeWidth={1.65} /></span>
    <span className="feature-overline">{overline}</span>
    <strong>{title}</strong>
    <span className="feature-description">{description}</span>
    <span className="feature-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
  </button>;
}

function HomePage({ go }: { go: (page: Page) => void }) {
  const today = new Date().getDay();
  const group = mysteries[weekMysteries[today]];
  return <>
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow light-eyebrow"><Sparkles size={15} /> UM CANTINHO PARA A ALMA</p>
        <h1>A fé floresce nos <em>pequenos encontros</em> com Deus.</h1>
        <p>Um espaço de paz para rezar, aprender e caminhar mais perto de Jesus, um dia de cada vez.</p>
        <button type="button" className="button button-cream" onClick={() => go('rosario')}>
          Começar a rezar <ArrowRight size={17} />
        </button>
      </div>
      <div className="hero-art" aria-hidden="true">
        <div className="art-aura"></div>
        <div className="art-ring outer"></div>
        <div className="art-ring inner"></div>
        <div className="art-cross"><span></span><span></span></div>
        <div className="hero-art-caption"><span>✦</span> Caminhe na presença de Deus <span>✦</span></div>
      </div>
    </section>

    <div className="today-card">
      <div className="today-icon"><CalendarDays size={25}/></div>
      <div className="today-text">
        <span>PARA O SEU DIA · {weekDays[today].toUpperCase()}</span>
        <strong>Hoje contemplamos os {group.name.toLowerCase()}.</strong>
        <p>Um convite para encontrar Jesus junto de Maria.</p>
      </div>
      <button className="today-link" onClick={() => go('rosario')} type="button">Rezar agora <ArrowRight size={16}/></button>
    </div>

    <div className="home-intro">
      <SectionTitle eyebrow="DESCUBRA" title="Alimente a fé. Cultive o coração." description="Escolha por onde começar sua jornada de oração e formação." />
    </div>
    <div className="feature-grid">
      <FeatureCard icon={Flower2} overline="ORAÇÃO" title="Santo Rosário" description="Contemple os mistérios da vida de Jesus, uma dezena de cada vez." onClick={() => go('rosario')} />
      <FeatureCard icon={Flame} overline="FORMAÇÃO" title="Crisma & Espírito Santo" description="Conheça os sete dons e os frutos do Espírito Santo." tone="sand" onClick={() => go('crisma')}/>
      <FeatureCard icon={BookHeart} overline="CATECISMO" title="Vida moral" description="Compreenda o pecado mortal, o venial e os pecados capitais." tone="blue" onClick={() => go('moral')}/>
      <FeatureCard icon={Heart} overline="INSPIRAÇÃO" title="Vidas de santidade" description="Histórias que mostram como viver a fé no dia a dia." tone="rose" onClick={() => go('santos')}/>
    </div>

    <section className="home-quote">
      <span className="quote-symbol">“</span>
      <p>A santidade não é reservada a poucos. É um chamado a amar nas coisas simples de cada dia.</p>
      <span>UMA PEQUENA REFLEXÃO PARA A CAMINHADA</span>
    </section>

    <section className="home-bottom">
      <div>
        <span className="eyebrow small-eyebrow">UM OLHAR PARA DENTRO</span>
        <h2>Um coração atento ao bem</h2>
        <p>Separe um momento de silêncio e reflita sobre sua caminhada diante de Deus.</p>
      </div>
      <button type="button" className="button button-dark" onClick={() => go('exame')}>Exame de consciência <ArrowRight size={17}/></button>
    </section>
  </>;
}

function RosaryPage() {
  const [groupId, setGroupId] = useState<MysteryGroupId>(() => weekMysteries[new Date().getDay()]);
  const [decade, setDecade] = useState(0);
  const [beads, setBeads] = useState(0);
  const [finished, setFinished] = useState(false);
  const group = mysteries[groupId];
  const current = group.items[Math.min(decade, 4)];
  const groupKeys: MysteryGroupId[] = ['gozosos', 'dolorosos', 'gloriosos', 'luminosos'];
  const done = finished ? 5 : decade;
  const choose = (key: MysteryGroupId) => { setGroupId(key); setDecade(0); setBeads(0); setFinished(false); };
  const reset = () => { setDecade(0); setBeads(0); setFinished(false); };
  const advance = () => {
    if (decade >= 4) setFinished(true);
    else { setDecade((d) => d + 1); setBeads(0); }
  };
  return <div className="page-content">
    <PageHeading eyebrow="ORAÇÃO E CONTEMPLAÇÃO" title="Santo Rosário" description="Pelas mãos de Maria, contemplamos os mistérios da vida de Jesus. Reze no seu ritmo, com calma e presença.">
      <Ref label="CIC 971 · Devoção mariana" href={SOURCE.maria}/>
      <Ref label="CIC 2678 · O Rosário" href={SOURCE.prayer}/>
      <Ref label="Rosarium Virginis Mariae" href={SOURCE.rosary}/>
    </PageHeading>

    <div className="guide-card">
      <div className="guide-icon"><Sun size={22}/></div>
      <div><strong>Como rezar o Rosário?</strong><p>Inicie com o Sinal da Cruz, o Creio, um Pai-Nosso, três Ave-Marias e um Glória. Em cada mistério, reze um Pai-Nosso, dez Ave-Marias e um Glória. Ao final, pode-se rezar a Salve-Rainha. Veja os textos completos logo abaixo.</p></div>
    </div>

    <SectionTitle eyebrow="ESCOLHA OS MISTÉRIOS" title="O que vamos contemplar?" description="O destaque inicial acompanha a tradição dos dias da semana. Você pode selecionar outro grupo livremente."/>
    <div className="mystery-tabs" role="group" aria-label="Grupos de mistérios">
      {groupKeys.map((key) => <button type="button" key={key} onClick={() => choose(key)} className={'mystery-tab' + (groupId === key ? ' active' : '')} aria-pressed={groupId === key}>
        <span>{mysteries[key].short}</span><small>{mysteries[key].days}</small>
      </button>)}
    </div>

    <section className="rosary-panel">
      <div className="rosary-panel-top">
        <span className="eyebrow small-eyebrow">{group.name.toUpperCase()}</span>
        <button type="button" className="text-action" onClick={reset}><RotateCcw size={14}/> Recomeçar</button>
      </div>
      <p className="rosary-intro">{group.description}</p>

      {finished ? <div className="rosary-finished">
        <div className="finish-emblem"><Check size={34}/></div>
        <h2>Seu terço foi concluído.</h2>
        <p>Que a contemplação desses mistérios fortaleça sua fé. Reserve um momento para agradecer e, se desejar, reze a Salve-Rainha.</p>
        <button type="button" className="button button-dark" onClick={reset}>Rezar novamente <RotateCcw size={17}/></button>
      </div> : <>
        <div className="decade-progress" aria-label={'Dezenas concluídas: ' + done + ' de 5'}>
          {group.items.map((item, i) => <button type="button" key={item.title} onClick={() => { setDecade(i); setBeads(0); }} className={'decade-dot' + (i < decade ? ' complete' : i === decade ? ' current' : '')} aria-label={'Ir para a ' + (i + 1) + 'ª dezena'} aria-current={i === decade ? 'step' : undefined}>{i < decade ? <Check size={14}/> : i + 1}</button>)}
        </div>
        <div className="decade-main">
          <span className="decade-number">{decade + 1}º MISTÉRIO</span>
          <h2>{current.title}</h2>
          <div className="scripture-chip"><BookOpen size={14}/>{current.scripture}</div>
          <p className="meditation">{current.meditate}</p>
        </div>
        <div className="beads-area">
          <div className="beads-title"><span>Dez Ave-Marias</span><strong>{beads}<small>/10</small></strong></div>
          <div className="beads" role="group" aria-label="Contador de Ave-Marias">
            {Array.from({length: 10}, (_, i) => <button type="button" key={i} title={'Ave-Maria ' + (i + 1)} aria-label={'Marcar até a Ave-Maria ' + (i + 1)} aria-pressed={i < beads} onClick={() => setBeads(i < beads ? i : i + 1)} className={'bead' + (i < beads ? ' bead-done' : '')}><span/></button>)}
          </div>
          <p>Reze um Pai-Nosso antes das dez Ave-Marias. Depois, o Glória ao Pai.</p>
          <div className="counter-controls">
            <button type="button" className="counter-sub" onClick={() => setBeads(Math.max(0, beads - 1))} disabled={beads === 0} aria-label="Diminuir contador"><ChevronLeft size={19}/></button>
            <button type="button" className="button button-dark counter-add" onClick={() => setBeads(Math.min(10, beads + 1))} disabled={beads === 10}>Marcar Ave-Maria <Check size={16}/></button>
            <button type="button" className="counter-sub" onClick={() => setBeads(Math.min(10, beads + 1))} disabled={beads === 10} aria-label="Aumentar contador"><ChevronRight size={19}/></button>
          </div>
        </div>
        <button type="button" className="button button-next" disabled={beads < 10} onClick={advance}>
          {decade === 4 ? 'Concluir o terço' : 'Próxima dezena'} <ArrowRight size={18}/>
        </button>
        <p className="progress-note">{beads === 10 ? 'Dez Ave-Marias marcadas. Reze o Glória e avance quando desejar.' : 'As marcações são temporárias e não são salvas.'}</p>
      </>}
    </section>

    <SectionTitle eyebrow="TENHA SEMPRE À MÃO" title="Orações do Rosário" description="Toque para abrir o texto de cada oração. A jaculatória é uma prática devocional opcional."/>
    <div className="accordions">
      {prayers.map((prayer, i) => <details key={prayer.title} className="accordion" open={i === 2 ? true : undefined}>
        <summary><span className="accordion-number">{String(i+1).padStart(2,'0')}</span><strong>{prayer.title}</strong><ChevronDown size={19}/></summary>
        <div className="accordion-body prayer-body">{prayer.body}</div>
      </details>)}
    </div>
    <div className="gentle-note"><Heart size={19}/> O Rosário é oração e contemplação, não corrida. Não é preciso alcançar uma contagem perfeita para rezar com amor.</div>
  </div>;
}

function MoralPage({ go }: { go: (page: Page) => void }) {
  const conditions = [
    {title: 'Matéria grave', number: '01', text: 'O objeto do ato envolve uma transgressão grave da lei moral. A gravidade considera o ato e suas circunstâncias.', ref: 'CIC 1858'},
    {title: 'Plena consciência', number: '02', text: 'A pessoa conhece o caráter pecaminoso do ato e sua oposição à lei de Deus.', ref: 'CIC 1859'},
    {title: 'Consentimento deliberado', number: '03', text: 'A pessoa escolhe livremente praticá-lo, com consentimento suficientemente deliberado.', ref: 'CIC 1859–1860'},
  ];
  return <div className="page-content">
    <PageHeading eyebrow="FORMAÇÃO · CATECISMO" title="Pecado mortal e venial" description="Uma explicação serena sobre a liberdade humana, a responsabilidade moral e a misericórdia de Deus.">
      <Ref href={SOURCE.mortal} label="CIC 1854–1864"/>
    </PageHeading>
    <div className="editorial-banner"><span className="editorial-banner-icon"><ShieldCheck size={25}/></span><div><strong>A moral cristã nasce do amor.</strong><p>O Catecismo ensina que o pecado fere a comunhão com Deus e com o próximo. A conversão é sempre um convite a voltar ao amor e à graça.</p></div></div>
    <SectionTitle eyebrow="CIC 1857" title="As três condições do pecado mortal" description="Segundo o Catecismo, as três condições precisam estar presentes simultaneamente."/>
    <div className="conditions-grid">
      {conditions.map((c) => <article className="condition-card" key={c.title}>
        <div className="condition-number">{c.number}</div><h3>{c.title}</h3><p>{c.text}</p><Ref href={SOURCE.mortal} label={c.ref}/>
      </article>)}
    </div>
    <div className="two-column">
      <article className="info-panel info-panel-cream"><div className="panel-icon"><Cross size={23}/></div><h3>Pecado mortal</h3><p>Quando há matéria grave, plena consciência e consentimento deliberado, o pecado mortal rompe a caridade no coração do ser humano. A Igreja anuncia a possibilidade da reconciliação por meio da misericórdia de Deus e do sacramento da Penitência.</p><Ref href={SOURCE.mortal} label="CIC 1855–1861"/></article>
      <article className="info-panel info-panel-sage"><div className="panel-icon"><Leaf size={23}/></div><h3>Pecado venial</h3><p>Ocorre em matéria leve ou quando, diante de matéria grave, faltam a plena consciência ou o consentimento completo. Enfraquece a caridade, mas não rompe a amizade com Deus.</p><Ref href={SOURCE.mortal} label="CIC 1862–1863"/></article>
    </div>
    <div className="guide-card guide-margin"><div className="guide-icon"><Heart size={21}/></div><div><strong>Liberdade e responsabilidade</strong><p>O Catecismo ensina que ignorância involuntária, medo, paixões e fatores psicológicos podem diminuir a responsabilidade pessoal. Tentação e pensamento involuntário não equivalem, por si sós, a uma escolha deliberada.</p><Ref href={SOURCE.mortal} label="CIC 1735 e 1860"/></div></div>
    <div className="next-section-card"><div><span className="eyebrow small-eyebrow">CONTINUE APRENDENDO</span><h3>Os sete pecados capitais</h3><p>Conheça as inclinações que podem gerar outros pecados e as virtudes que nos ajudam a crescer.</p></div><button type="button" className="button button-dark" onClick={() => go('capitais')}>Explorar <ArrowRight size={16}/></button></div>
  </div>;
}

function CapitalsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const icons = [Crown, Compass, Heart, Flame, Sun, CircleHelp, Clock3];
  return <div className="page-content">
    <PageHeading eyebrow="FORMAÇÃO · VIRTUDES" title="Os sete pecados capitais" description="Chamam-se capitais porque podem dar origem a outros pecados e vícios. Conhecer suas raízes ajuda a cultivar as virtudes.">
      <Ref href={SOURCE.mortal} label="CIC 1865–1866"/>
    </PageHeading>
    <div className="guide-card"><div className="guide-icon"><BookOpen size={21}/></div><div><strong>Capital não quer dizer automaticamente mortal.</strong><p>A expressão se refere à capacidade de gerar outros pecados. A gravidade de cada ato depende dos critérios ensinados pela Igreja.</p></div></div>
    <div className="capital-grid">
      {capitalSins.map((sin, i) => {
        const Icon = icons[i];
        const isOpen = expanded === i;
        return <article className={'capital-card' + (isOpen ? ' expanded' : '')} key={sin.title}>
          <div className="capital-card-head"><span className="capital-icon"><Icon size={25} strokeWidth={1.6}/></span><span className="capital-index">0{i+1} / 07</span></div>
          <h2>{sin.title}</h2><p>{sin.description}</p>
          <div className="virtue-pill"><Leaf size={13}/> Virtude: {sin.virtue}</div>
          <button type="button" className="capital-more" onClick={() => setExpanded(isOpen ? null : i)} aria-expanded={isOpen}>Para cultivar a virtude <ChevronDown size={17} className={isOpen ? 'flip' : ''}/></button>
          {isOpen && <div className="virtue-details"><p>{sin.reflection}</p><Ref href={SOURCE.mortal} label="CIC 1866"/></div>}
        </article>;
      })}
    </div>
  </div>;
}

function ConfirmationPage() {
  return <div className="page-content">
    <PageHeading eyebrow="SACRAMENTOS · ESPÍRITO SANTO" title="O dom da Crisma" description="A Confirmação aprofunda a graça do Batismo, fortalece os laços com a Igreja e nos envia como testemunhas de Cristo.">
      <Ref href={SOURCE.confirmation} label="CIC 1285–1321"/>
      <Ref href={SOURCE.gifts} label="CIC 1830–1832"/>
    </PageHeading>
    <section className="confirmation-feature"><div className="confirmation-emblem"><Flame size={56} strokeWidth={1.25}/></div><div><p className="eyebrow small-eyebrow">O SACRAMENTO DA CONFIRMAÇÃO</p><h2>Marcados com o dom do Espírito Santo.</h2><p>A Crisma comunica uma efusão especial do Espírito Santo, aprofunda a graça batismal e fortalece os cristãos para testemunhar sua fé.</p><Ref href={SOURCE.confirmation} label="CIC 1302–1305"/></div></section>
    <SectionTitle eyebrow="SETE PRESENTES PARA A CAMINHADA" title="Os dons do Espírito Santo" description="São disposições que nos tornam atentos e dóceis às inspirações de Deus."/>
    <div className="gifts-grid">
      {gifts.map((gift, i) => <article className="gift-card" key={gift.title}><span className="gift-num">{String(i+1).padStart(2,'0')}</span><div className="gift-symbol"><Flame size={22} strokeWidth={1.5}/></div><h3>{gift.title}</h3><p>{gift.description}</p></article>)}
    </div>
    <div className="section-references"><Ref href={SOURCE.gifts} label="CIC 1830–1831 · Sete dons"/></div>
    <SectionTitle eyebrow="FRUTOS DE UMA VIDA NO ESPÍRITO" title="Os frutos do Espírito Santo" description="A tradição da Igreja enumera doze frutos, sinais da ação do Espírito em nossa vida."/>
    <div className="fruits-panel"><div className="fruits-grid">{fruits.map((fruit) => <div className="fruit" key={fruit}><Check size={15}/>{fruit}</div>)}</div><div className="fruits-foot"><Ref href={SOURCE.gifts} label="CIC 1832 · Frutos do Espírito"/></div></div>
    <div className="gentle-note"><Feather size={19}/> A Crisma não é o fim da formação: é um chamado a continuar crescendo na fé e no serviço.</div>
  </div>;
}

function ExamPage() {
  const [checked, setChecked] = useState<Set<string>>(() => new Set());
  const toggle = (id: string) => setChecked((old) => {
    const next = new Set(old);
    if (next.has(id)) next.delete(id); else next.add(id);
    return next;
  });
  return <div className="page-content">
    <PageHeading eyebrow="SILÊNCIO · REFLEXÃO" title="Exame de consciência" description="Um momento de sinceridade diante de Deus, à luz dos Dez Mandamentos e do Evangelho. Sem pressa, sem pontuação.">
      <Ref href={SOURCE.confession} label="CIC 1454 · Exame de consciência"/>
      <Ref href={SOURCE.firstCommandments} label="CIC 2083–2195 · Amar a Deus"/>
      <Ref href={SOURCE.decalogue} label="CIC 2196–2557 · Amar o próximo"/>
    </PageHeading>
    <div className="guide-card"><div className="guide-icon"><Heart size={22}/></div><div><strong>Uma ajuda, não um julgamento.</strong><p>Estas perguntas são sugestões de reflexão, não uma lista exaustiva nem um diagnóstico. Reflita sobre atos concretos, com confiança na misericórdia de Deus. Em caso de dúvidas pessoais, converse com seu confessor.</p></div></div>
    <div className="exam-bar"><div><strong>Os Dez Mandamentos</strong><p>Marque somente o que desejar levar à reflexão.</p></div><button type="button" onClick={() => setChecked(new Set())} disabled={checked.size === 0} className="text-action"><RotateCcw size={15}/> Limpar marcações</button></div>
    <div className="accordions exam-list">
      {commandments.map((cmd, i) => <details className="accordion exam-group" key={cmd.title}>
        <summary><span className="accordion-number">{String(i+1).padStart(2,'0')}</span><strong>{cmd.title}</strong><ChevronDown size={19}/></summary>
        <div className="accordion-body exam-questions">
          {cmd.questions.map((q, j) => {
            const id = i + '-' + j;
            return <label className="exam-checkbox" key={id}><input type="checkbox" checked={checked.has(id)} onChange={() => toggle(id)} /><span className="custom-check" aria-hidden="true"><Check size={13}/></span><span>{q}</span></label>;
          })}
        </div>
      </details>)}
    </div>
    <div className="privacy-note"><ShieldCheck size={22}/><div><strong>Seu exame é privado.</strong><p>Nenhuma resposta é enviada ou armazenada. Ao atualizar ou fechar a página, as marcações desaparecem.</p></div></div>
    <div className="closing-prayer"><span>ORAÇÃO SIMPLES</span><p>Senhor, dá-me um coração sincero, capaz de reconhecer o bem, pedir perdão quando necessário e confiar sempre na tua misericórdia. Amém.</p></div>
  </div>;
}

function SaintsPage() {
  return <div className="page-content">
    <PageHeading eyebrow="TESTEMUNHOS DE VIDA" title="Santos & devoções" description="Vidas diferentes, um mesmo amor: seguir Jesus com fidelidade nas circunstâncias de cada dia.">
      <Ref href={SOURCE.maria} label="CIC 946–962 · Comunhão dos santos"/>
    </PageHeading>
    <div className="saints-stack">
      {saints.map((saint, i) => {
        return <article className={'saint-card saint-' + i} key={saint.name}>
          <div className="saint-visual">
            <img className="saint-photo-backdrop" src={import.meta.env.BASE_URL + saint.photo + '?v=2'} alt="" aria-hidden="true" loading="lazy" decoding="async"/>
            <img className="saint-photo" src={import.meta.env.BASE_URL + saint.photo + '?v=2'} alt={saint.name} loading="lazy" decoding="async"/>
            <div className="saint-visual-footer">✦ CAMINHO DE SANTIDADE ✦</div>
          </div>
          <div className="saint-details"><span className="eyebrow small-eyebrow">{saint.subtitle.toUpperCase()}</span><h2>{saint.name}</h2><p className="saint-feast"><CalendarDays size={15}/> Celebração: {saint.year}</p><p className="saint-story">{saint.story}</p><div className="saint-example"><Leaf size={17}/><span><strong>Para inspirar a vida:</strong> {saint.example}</span></div>
            <details className="saint-prayer"><summary><Heart size={16}/> Uma oração <ChevronDown size={17}/></summary><p>{saint.prayer}</p><small>Oração original para devoção pessoal.</small></details>
            <div className="saint-sources"><Ref href={saint.source} label={saint.sourceName}/><Ref href={saint.catechismUrl} label={saint.catechism}/></div>
          </div>
        </article>;
      })}
    </div>
  </div>;
}

export default function App() {
  const [page, setPage] = useState<Page>(currentPage);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onHash = () => { setPage(currentPage()); setMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const go = (next: Page) => {
    if (page === next) { setMenuOpen(false); window.scrollTo({top: 0, behavior:'smooth'}); return; }
    window.location.hash = '/' + next;
    setPage(next);
    setMenuOpen(false);
    window.scrollTo({top:0,behavior:'smooth'});
  };
  return <div className="app-shell">
    <header className="site-header">
      <div className="header-inner">
        <button type="button" onClick={() => go('inicio')} className="logo-button" aria-label="Caminho de Fé — página inicial">
          <span className="logo-mark"><Cross size={20} strokeWidth={1.7}/></span>
          <span className="logo-name">caminho <em>de</em> fé<span>.</span></span>
        </button>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {routes.map((route) => <button type="button" key={route.id} onClick={() => go(route.id)} className={'nav-link' + (page === route.id ? ' active' : '')} aria-current={page === route.id ? 'page' : undefined}>{route.label}</button>)}
        </nav>
        <button type="button" className="mobile-menu-button" aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={23}/> : <Menu size={23}/>}</button>
      </div>
      {menuOpen && <nav className="mobile-dropdown" aria-label="Menu principal">{routes.map((route) => <button key={route.id} type="button" className={page === route.id ? 'active' : ''} onClick={() => go(route.id)}><route.icon size={19}/>{route.title}<ChevronRight size={16}/></button>)}</nav>}
    </header>
    <main id="conteudo" className="main-content" key={page}>
      {page === 'inicio' && <HomePage go={go}/>}
      {page === 'rosario' && <RosaryPage/>}
      {page === 'moral' && <MoralPage go={go}/>}
      {page === 'capitais' && <CapitalsPage/>}
      {page === 'crisma' && <ConfirmationPage/>}
      {page === 'exame' && <ExamPage/>}
      {page === 'santos' && <SaintsPage/>}
    </main>
    <footer className="site-footer"><div className="footer-inner"><div><div className="footer-brand"><Cross size={17}/> caminho de fé.</div><p>Um espaço simples para rezar, aprender e crescer no amor de Deus.</p></div><div className="footer-right"><a href={SOURCE.mortal} target="_blank" rel="noopener noreferrer">Catecismo da Igreja Católica <ExternalLink size={13}/></a><span>Feito com fé, carinho e propósito. ✦</span></div></div></footer>
    <nav className="bottom-nav" aria-label="Navegação no celular">
      {([{id:'inicio',icon:Home,label:'Início'},{id:'rosario',icon:Flower2,label:'Rosário'},{id:'crisma',icon:Flame,label:'Crisma'},{id:'exame',icon:CheckCircle2,label:'Exame'},{id:'santos',icon:Heart,label:'Santos'}] as const).map((item) => <button key={item.id} onClick={() => go(item.id)} className={page === item.id ? 'active' : ''} type="button" aria-label={item.label} aria-current={page === item.id ? 'page' : undefined}><item.icon size={20} strokeWidth={1.8}/><span>{item.label}</span></button>)}
      <button type="button" onClick={() => setMenuOpen(!menuOpen)} className={page === 'moral' || page === 'capitais' ? 'active' : ''} aria-label="Mais páginas"><Menu size={20}/><span>Mais</span></button>
    </nav>
  </div>;
}
