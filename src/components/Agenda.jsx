function Agenda({agenda}) {
    return (
        <div>
            <div className="agendaTemplate">
                <img src={agenda.image} />
                <div className="agendaTemplateTitle">{agenda.name}</div>
                <p className="agendaTemplateDesc">
                    {agenda.description}
                </p>
            </div>
        </div>
    )
}

export default Agenda