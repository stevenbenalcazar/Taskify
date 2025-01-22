import boto3
from boto3.dynamodb.conditions import Key

# Conexión a DynamoDB
dynamodb = boto3.resource('dynamodb', region_name='us-east-1')  # Ajusta la región
table = dynamodb.Table('Calendars')

def get_events(calendar_id):
    response = table.query(
        KeyConditionExpression=Key('calendar_id').eq(calendar_id)
    )
    return response.get('Items', [])

def add_event(event):
    table.put_item(Item=event)
