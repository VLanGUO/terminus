import { Component } from '@angular/core'
import { ConfigService, ElectronService } from 'terminus-core'
import { TerminalService } from '../services/terminal.service'

@Component({
    template: require('./terminalSettingsTab.component.pug'),
})
export class TerminalSettingsTabComponent {
    constructor (
        public config: ConfigService,
        private electron: ElectronService,
        private terminal: TerminalService,
    ) { }

    openWSLVolumeMixer () {
        this.electron.shell.openItem('sndvol.exe')
        this.terminal.openTab({
            id: '',
            command: 'wsl.exe',
            args: ['tput', 'bel'],
        }, null, true)
    }
}
