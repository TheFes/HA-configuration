void switchbot_curtain( const esp32_ble_tracker::ESPBTDevice *x
            , esphome::template_::TemplateCover *curtainEnt
            , esphome::template_::TemplateSensor* batteryEnt
            )
{
    for (auto data : x->get_service_datas())
    {
        if(data.data.size() >= 5)
        {
            int8_t battLevel = 0;
            float  position = 0;

            battLevel = data.data[2] & 0b01111111;
            position = float((100-data.data[3] & 0b01111111)) / float(100);

            // Set the operation, but not if we're in the rounding range
            if (!(data.data[3] & 0b10000000))
                curtainEnt->current_operation = COVER_OPERATION_IDLE;
            else if (position < 0.9 && position < curtainEnt->position)
                curtainEnt->current_operation = COVER_OPERATION_CLOSING;
            else if (position > 0.1 && position > curtainEnt->position)
                curtainEnt->current_operation = COVER_OPERATION_OPENING;

            // Round position down in case the curtain didn't quite get there
            if (position > 0.9)
                curtainEnt->position = 1;
            else if (position < 0.1)
                curtainEnt->position = 0;
            else
                curtainEnt->position = position;

            curtainEnt->publish_state();
            batteryEnt->publish_state(battLevel);
        }
    }
}