# Prompt-Red

```
   ██████╗ ██████╗  ██████╗ ███╗   ███╗██████╗ ████████╗
   ██╔══██╗██╔══██╗██╔═══██╗████╗ ████║██╔══██╗╚══██╔══╝
   ██████╔╝██████╔╝██║   ██║██╔████╔██║██████╔╝   ██║   
   ██╔═══╝ ██╔══██╗██║   ██║██║╚██╔╝██║██╔═══╝    ██║   
   ██║     ██║  ██║╚██████╔╝██║ ╚═╝ ██║██║        ██║   
   ╚═╝     ╚═╝  ╚═╝ ╚═════╝ ╚═╝     ╚═╝╚═╝        ╚═╝   
```

**Red Team Operations Platform**

Prompt-Red is a bug bounty pentesting lab for red teams that spawns within the browser. It provides a terminal-based interface simulating common penetration testing tools for educational purposes.

## Features

- 🖥️ **Browser-Based Terminal**: No installation required - runs entirely in your browser
- 🛠️ **Simulated Red Team Tools**: Practice with simulated versions of popular pentesting tools
- 📚 **Educational Focus**: Learn penetration testing concepts safely
- ⚡ **Instant Access**: Open and start practicing immediately

## Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/Fin-Iam/Prompt-Red.git
   cd Prompt-Red
   ```

2. Open `index.html` in your web browser

3. Type `help` to see available commands

## Available Commands

- `help` - Display available commands
- `nmap` - Network exploration and security scanning
- `sqlmap` - SQL injection testing tool
- `gobuster` - Directory/file enumeration
- `metasploit` - Penetration testing framework
- `whois` - Domain WHOIS lookup
- `exploit` - Execute exploit modules
- `recon` - Reconnaissance tools suite
- `about` - Information about PROMPT-RED
- `history` - Show command history
- `clear` - Clear terminal screen

## Usage Examples

```bash
# Scan a target
nmap 192.168.1.100

# Test for SQL injection
sqlmap -u http://example.com/page?id=1

# Directory enumeration
gobuster dir -u http://example.com -w wordlist.txt

# WHOIS lookup
whois example.com

# Reconnaissance
recon example.com
```

## Educational Purpose

⚠️ **IMPORTANT**: This platform is designed for **educational purposes only**. All tools are simulations and do not perform actual attacks. Always obtain proper authorization before conducting any real penetration testing.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Disclaimer

This software is provided for educational purposes only. The authors and contributors are not responsible for any misuse or damage caused by this program. Always ensure you have explicit permission before testing any systems.
