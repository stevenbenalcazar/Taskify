import graphene

class Event(graphene.ObjectType):
    event_id = graphene.ID()
    title = graphene.String()
    description = graphene.String()
    start_time = graphene.String()
    end_time = graphene.String()

class Query(graphene.ObjectType):
    get_calendar = graphene.List(Event, calendar_id=graphene.ID())

    def resolve_get_calendar(self, info, calendar_id):
        # Aquí deberás integrar con DynamoDB para obtener los eventos
        return []

class Mutation(graphene.ObjectType):
    create_event = graphene.Field(Event, title=graphene.String(), description=graphene.String(), start_time=graphene.String(), end_time=graphene.String())
    update_event = graphene.Field(Event, event_id=graphene.ID(), title=graphene.String(), description=graphene.String(), start_time=graphene.String(), end_time=graphene.String())
    delete_event = graphene.Boolean(event_id=graphene.ID())

    def resolve_create_event(self, info, title, description, start_time, end_time):
        # Lógica para crear un evento
        return Event(event_id="1", title=title, description=description, start_time=start_time, end_time=end_time)

    def resolve_update_event(self, info, event_id, title, description, start_time, end_time):
        # Lógica para actualizar un evento
        return Event(event_id=event_id, title=title, description=description, start_time=start_time, end_time=end_time)

    def resolve_delete_event(self, info, event_id):
        # Lógica para eliminar un evento
        return True
