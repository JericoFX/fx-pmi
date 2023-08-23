 <script lang="ts">
import {Icon,Tooltip} from "yesvelte"
 </script>
 
 <div class="flex h-full justify-around items-center flex-col">
        <Icon
          name="shield-check-filled"
          class="hover:w-9 transition-width cursor-pointer"
          color="light"
          size="2x"
        />
        <Tooltip placement="top">Officers</Tooltip>
        <Icon
          name="user"
          color="light"
          class="hover:w-9 transition-width cursor-pointer"
          size="2x"
        />
        <Tooltip placement="top">People</Tooltip>
        <Icon
          name="car"
          color="light"
          class="hover:w-9 transition-width cursor-pointer"
          size="2x"
        />
        <Tooltip placement="top">Cars</Tooltip>
        <Icon
          name="sos"
          color="light"
          class="hover:w-9 transition-width cursor-pointer"
          size="2x"
        />
        <Tooltip placement="top">Danger</Tooltip>
        <Icon
          name="sword"
          color="light"
          class="hover:w-9 transition-width cursor-pointer"
          size="2x"
        />
        <Tooltip placement="top">Weapons</Tooltip>
        <Icon
          name="lock-check"
          color="light"
          class="hover:w-9 transition-width cursor-pointer"
          size="2x"
        />
        <Tooltip placement="top">Config</Tooltip>
      </div>