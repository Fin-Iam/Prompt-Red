// Terminal state
const state = {
    commandHistory: [],
    historyIndex: -1,
    currentDirectory: '~'
};

// ASCII Art Banner
const banner = `
   ██████╗ ██████╗  ██████╗ ███╗   ███╗██████╗ ████████╗
   ██╔══██╗██╔══██╗██╔═══██╗████╗ ████║██╔══██╗╚══██╔══╝
   ██████╔╝██████╔╝██║   ██║██╔████╔██║██████╔╝   ██║   
   ██╔═══╝ ██╔══██╗██║   ██║██║╚██╔╝██║██╔═══╝    ██║   
   ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║██║        ██║   
   ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝        ╚═╝   
                        <RED>                           
              Red Team Operations Platform              

Type 'help' to see available commands.
`;

// Command implementations
const commands = {
    help: {
        description: 'Display available commands',
        usage: 'help [command]',
        execute: (args) => {
            if (args.length > 0) {
                const cmd = args[0];
                if (commands[cmd]) {
                    return [
                        { text: `Command: ${cmd}`, class: 'info' },
                        { text: `Description: ${commands[cmd].description}`, class: '' },
                        { text: `Usage: ${commands[cmd].usage}`, class: '' }
                    ];
                }
                return [{ text: `Command '${cmd}' not found`, class: 'error' }];
            }
            
            const output = [
                { text: 'Available Commands:', class: 'info' },
                { text: '', class: '' }
            ];
            
            Object.keys(commands).forEach(cmd => {
                output.push({ 
                    text: `  ${cmd.padEnd(15)} - ${commands[cmd].description}`, 
                    class: 'success' 
                });
            });
            
            output.push({ text: '', class: '' });
            output.push({ text: 'Type "help [command]" for detailed information', class: 'warning' });
            
            return output;
        }
    },
    
    clear: {
        description: 'Clear the terminal screen',
        usage: 'clear',
        execute: () => {
            document.getElementById('output').innerHTML = '';
            return [];
        }
    },
    
    nmap: {
        description: 'Network exploration and security scanning',
        usage: 'nmap [target]',
        execute: (args) => {
            if (args.length === 0) {
                return [{ text: 'Usage: nmap [target]', class: 'error' }];
            }
            
            const target = args[0];
            return [
                { text: `Starting Nmap scan on ${target}...`, class: 'info' },
                { text: '', class: '' },
                { text: 'PORT      STATE    SERVICE', class: 'info' },
                { text: '22/tcp    open     ssh', class: 'success' },
                { text: '80/tcp    open     http', class: 'success' },
                { text: '443/tcp   open     https', class: 'success' },
                { text: '3306/tcp  filtered mysql', class: 'warning' },
                { text: '', class: '' },
                { text: 'Nmap scan completed', class: 'success' }
            ];
        }
    },
    
    sqlmap: {
        description: 'Automatic SQL injection and database takeover tool',
        usage: 'sqlmap -u [url]',
        execute: (args) => {
            if (args.length < 2 || args[0] !== '-u') {
                return [{ text: 'Usage: sqlmap -u [url]', class: 'error' }];
            }
            
            const url = args[1];
            return [
                { text: `[*] Starting SQL injection test on ${url}`, class: 'info' },
                { text: '[*] Testing parameter: id', class: '' },
                { text: '[*] Testing for SQL injection vulnerabilities...', class: '' },
                { text: '[+] Parameter "id" is vulnerable to SQL injection', class: 'success' },
                { text: '[+] Backend DBMS: MySQL 5.7.34', class: 'success' },
                { text: '[+] Injection type: boolean-based blind', class: 'success' },
                { text: '[!] Use --dump to extract data', class: 'warning' }
            ];
        }
    },
    
    gobuster: {
        description: 'Directory/file & DNS busting tool',
        usage: 'gobuster dir -u [url] -w [wordlist]',
        execute: (args) => {
            if (args.length < 4 || args[0] !== 'dir') {
                return [{ text: 'Usage: gobuster dir -u [url] -w [wordlist]', class: 'error' }];
            }
            
            return [
                { text: '[*] Gobuster directory enumeration', class: 'info' },
                { text: '[+] /admin       (Status: 200)', class: 'success' },
                { text: '[+] /login       (Status: 200)', class: 'success' },
                { text: '[+] /backup      (Status: 403)', class: 'warning' },
                { text: '[+] /config      (Status: 403)', class: 'warning' },
                { text: '[+] /uploads     (Status: 200)', class: 'success' },
                { text: '[*] Scan completed', class: 'info' }
            ];
        }
    },
    
    metasploit: {
        description: 'Penetration testing framework',
        usage: 'metasploit',
        execute: () => {
            return [
                { text: '=[ metasploit v6.3.0                      ]', class: 'info' },
                { text: '+ -- --=[ 2300 exploits - 1200 auxiliary - 400 post       ]', class: '' },
                { text: '+ -- --=[ 1000 payloads - 45 encoders - 11 nops           ]', class: '' },
                { text: '+ -- --=[ 9 evasion                                        ]', class: '' },
                { text: '', class: '' },
                { text: 'msf6 > use exploit/multi/handler', class: 'success' },
                { text: 'msf6 exploit(multi/handler) > set payload windows/meterpreter/reverse_tcp', class: 'success' },
                { text: 'msf6 exploit(multi/handler) > show options', class: 'success' },
                { text: '', class: '' },
                { text: '[*] Metasploit console simulation - use real msfconsole for actual operations', class: 'warning' }
            ];
        }
    },
    
    whois: {
        description: 'Query WHOIS information for domain',
        usage: 'whois [domain]',
        execute: (args) => {
            if (args.length === 0) {
                return [{ text: 'Usage: whois [domain]', class: 'error' }];
            }
            
            const domain = args[0];
            return [
                { text: `WHOIS information for ${domain}:`, class: 'info' },
                { text: '', class: '' },
                { text: 'Domain Name: ' + domain.toUpperCase(), class: '' },
                { text: 'Registrar: Example Registrar Inc.', class: '' },
                { text: 'Creation Date: 2020-01-15T10:00:00Z', class: '' },
                { text: 'Expiration Date: 2026-01-15T10:00:00Z', class: '' },
                { text: 'Name Server: ns1.example.com', class: '' },
                { text: 'Name Server: ns2.example.com', class: '' }
            ];
        }
    },
    
    exploit: {
        description: 'Execute an exploit module',
        usage: 'exploit [target]',
        execute: (args) => {
            if (args.length === 0) {
                return [{ text: 'Usage: exploit [target]', class: 'error' }];
            }
            
            return [
                { text: '[*] Initializing exploit framework...', class: 'info' },
                { text: '[*] Loading payload...', class: '' },
                { text: '[+] Exploit sent successfully', class: 'success' },
                { text: '[*] Waiting for connection...', class: '' },
                { text: '[+] Session opened: ' + args[0], class: 'success' },
                { text: '', class: '' },
                { text: '[!] This is a simulation - educational purposes only', class: 'warning' }
            ];
        }
    },
    
    recon: {
        description: 'Reconnaissance tools suite',
        usage: 'recon [target]',
        execute: (args) => {
            if (args.length === 0) {
                return [{ text: 'Usage: recon [target]', class: 'error' }];
            }
            
            const target = args[0];
            return [
                { text: `[*] Performing reconnaissance on ${target}`, class: 'info' },
                { text: '', class: '' },
                { text: '[+] DNS Records:', class: 'info' },
                { text: '    A      192.168.1.100', class: '' },
                { text: '    MX     mail.example.com', class: '' },
                { text: '    TXT    v=spf1 include:_spf.example.com ~all', class: '' },
                { text: '', class: '' },
                { text: '[+] Subdomains discovered:', class: 'info' },
                { text: '    www.' + target, class: 'success' },
                { text: '    mail.' + target, class: 'success' },
                { text: '    ftp.' + target, class: 'success' },
                { text: '    admin.' + target, class: 'success' }
            ];
        }
    },
    
    about: {
        description: 'Information about PROMPT-RED',
        usage: 'about',
        execute: () => {
            return [
                { text: 'PROMPT-RED v1.0.0', class: 'info' },
                { text: '', class: '' },
                { text: 'Red Team Operations Platform', class: 'success' },
                { text: 'A browser-based pentesting lab for educational purposes', class: '' },
                { text: '', class: '' },
                { text: 'Features:', class: 'info' },
                { text: '  • Network scanning simulation', class: '' },
                { text: '  • Web vulnerability testing tools', class: '' },
                { text: '  • Exploitation framework', class: '' },
                { text: '  • Reconnaissance utilities', class: '' },
                { text: '', class: '' },
                { text: 'WARNING: For educational purposes only!', class: 'warning' },
                { text: 'Always obtain proper authorization before testing.', class: 'warning' }
            ];
        }
    },
    
    history: {
        description: 'Show command history',
        usage: 'history',
        execute: () => {
            if (state.commandHistory.length === 0) {
                return [{ text: 'No commands in history', class: 'warning' }];
            }
            
            return state.commandHistory.map((cmd, idx) => ({
                text: `  ${(idx + 1).toString().padStart(3)} ${cmd}`,
                class: ''
            }));
        }
    }
};

// Initialize terminal
function init() {
    const bannerElement = document.getElementById('banner');
    bannerElement.textContent = banner;
    
    const input = document.getElementById('command-input');
    input.addEventListener('keydown', handleKeyDown);
    
    // Display welcome message
    addOutput([
        { text: 'Welcome to PROMPT-RED!', class: 'success' },
        { text: 'Type "help" for available commands.', class: 'info' },
        { text: '', class: '' }
    ]);
}

// Handle keyboard input
function handleKeyDown(e) {
    const input = e.target;
    
    if (e.key === 'Enter') {
        const command = input.value.trim();
        if (command) {
            executeCommand(command);
            state.commandHistory.push(command);
            state.historyIndex = state.commandHistory.length;
        }
        input.value = '';
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (state.historyIndex > 0) {
            state.historyIndex--;
            input.value = state.commandHistory[state.historyIndex];
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (state.historyIndex < state.commandHistory.length - 1) {
            state.historyIndex++;
            input.value = state.commandHistory[state.historyIndex];
        } else {
            state.historyIndex = state.commandHistory.length;
            input.value = '';
        }
    } else if (e.key === 'Tab') {
        e.preventDefault();
        autocomplete(input);
    }
}

// Execute command
function executeCommand(commandLine) {
    // Show command in output
    addOutput([{ text: `root@prompt-red:~# ${commandLine}`, class: 'command-history' }]);
    
    const parts = commandLine.split(' ');
    const cmd = parts[0];
    const args = parts.slice(1);
    
    if (commands[cmd]) {
        const result = commands[cmd].execute(args);
        if (result && result.length > 0) {
            addOutput(result);
        }
    } else if (cmd) {
        addOutput([{ text: `Command not found: ${cmd}`, class: 'error' }]);
        addOutput([{ text: 'Type "help" for available commands', class: 'info' }]);
    }
    
    // Scroll to bottom
    const terminalBody = document.querySelector('.terminal-body');
    terminalBody.scrollTop = terminalBody.scrollHeight;
}

// Add output to terminal
function addOutput(lines) {
    const output = document.getElementById('output');
    lines.forEach(line => {
        const div = document.createElement('div');
        div.className = `output-line ${line.class || ''}`;
        div.textContent = line.text;
        output.appendChild(div);
    });
}

// Autocomplete
function autocomplete(input) {
    const value = input.value;
    const matches = Object.keys(commands).filter(cmd => cmd.startsWith(value));
    
    if (matches.length === 1) {
        input.value = matches[0];
    } else if (matches.length > 1) {
        addOutput([{ text: matches.join('  '), class: 'info' }]);
    }
}

// Start the terminal
window.addEventListener('DOMContentLoaded', init);
