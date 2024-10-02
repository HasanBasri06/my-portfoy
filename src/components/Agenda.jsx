function Agenda({agenda}) {
    return (
        <div className="agendaTemplate">
            <div className="agendaCircle"></div>
            <img src={agenda.image} />
            <div className="agendaTemplateTitle">{agenda.name}</div>
            <p className="agendaTemplateDesc">
                {agenda.description}
            </p>
        </div>
    )
}

export default Agenda