/**
 * Created by Kungen on 2016-05-11.
 */
function Countdown() {
    this.start_time = "30:00"
    this.target_id = "#timer"
    this.name = "timer";
}
Countdown.prototype.init = function()
{
    this.reset();
    setInterval(this.name + '.tick()', 1000);
}

Countdown.prototype.reset = function()
{
 time = this.start_time.split(":")
    this.minuts = parseInt(time[0]);
    this.second = parseInt(time[1]);
    this.update_target();
}

Countdown.prototype.tick = function()
{
    if (this.second > 0 || this.minuts > 0)
    {
        if(this.second == 0)
        {
            this.minuts = this.minuts - 1;
            this.second = 59
        } else {
            this.second = this.second - 1;
        }
        
    }
        this.update_target()

}
Countdown.prototype.update_target = function()
{
    second = this.second;
    if(second < 10) second = "0" + second;
    $(this.target_id).val(this.minuts + ":" + second)
}
