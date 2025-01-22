import boto3

kinesis = boto3.client('kinesis', region_name='us-east-1')

def send_event_to_kinesis(data):
    response = kinesis.put_record(
        StreamName='YourKinesisStream',
        Data=data,
        PartitionKey="partitionkey"
    )
    return response
