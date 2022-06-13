void switchbot_battery_only( const esp32_ble_tracker::ESPBTDevice *x
                           , esphome::template_::TemplateSensor* batteryEnt
                           )
{
    for (auto data : x->get_service_datas())
    {
        batteryEnt->publish_state(data.data[2] & 0b01111111);
    }
}