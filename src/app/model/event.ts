export class Event {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public LocalDateTime: Date,
    public location: string,
    public organizer: string,
    public capacity: string,
    public isOnline: boolean){}
}
