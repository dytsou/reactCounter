# CI/CD Pipeline Documentation

This repository includes a comprehensive CI/CD pipeline using GitHub Actions. Below is an overview of all workflows and their purposes.

## 🔄 Workflows

### 1. **CI Workflow** (`.github/workflows/ci.yml`)
**Triggers:** Push/PR to main, master, develop branches

**Features:**
- Multi-Node.js version testing (18.x, 20.x)
- pnpm dependency management with caching
- ESLint code quality checks
- Jest test execution with coverage
- Production build verification
- Codecov integration for coverage reporting

### 2. **Code Quality Workflow** (`.github/workflows/code-quality.yml`)
**Triggers:** Push/PR to main, master, develop branches

**Features:**
- ESLint validation
- Code formatting checks
- Console.log statement detection
- TODO/FIXME comment tracking
- Bundle size analysis
- Automated PR comments with analysis

### 3. **Security Audit Workflow** (`.github/workflows/ci.yml` - Security Job)
**Triggers:** Push/PR to main, master, develop branches

**Features:**
- pnpm security audit
- Vulnerability scanning
- Security report generation

### 4. **Dependency Update Workflow** (`.github/workflows/dependency-update.yml`)
**Triggers:** Weekly (Mondays 9 AM UTC) + Manual

**Features:**
- Automated dependency updates
- Security fix application
- Automatic PR creation for updates
- Change detection and validation

### 5. **Deploy Workflow** (`.github/workflows/deploy.yml`)
**Triggers:** Push to main/master branches, version tags

**Features:**
- Production build creation
- GitHub Pages deployment
- Deployment URL commenting on PRs
- Artifact upload for releases

### 6. **Release Workflow** (`.github/workflows/release.yml`)
**Triggers:** Version tags (v*)

**Features:**
- Automated release creation
- Changelog generation
- Build artifact upload
- Release notes with build information

## 🛠️ Available Scripts

### Development
```bash
pnpm start          # Start development server
pnpm test           # Run tests in watch mode
pnpm test:watch     # Run tests without watch mode
pnpm test:ci        # Run tests with coverage (CI mode)
```

### Code Quality
```bash
pnpm lint           # Run ESLint
pnpm lint:fix       # Fix ESLint issues automatically
```

### Build & Deploy
```bash
pnpm build          # Create production build
pnpm analyze        # Build and serve locally
pnpm clean          # Clean build artifacts
```

## 🔧 Configuration Files

### Dependabot (`.github/dependabot.yml`)
- Weekly dependency updates
- Grouped updates for React and dev dependencies
- Ignores major version updates for react-scripts and webpack-dev-server
- Automatic PR creation with proper labels

### Issue Templates
- **Bug Report** (`.github/ISSUE_TEMPLATE/bug_report.md`)
- **Feature Request** (`.github/ISSUE_TEMPLATE/feature_request.md`)

### PR Template (`.github/PULL_REQUEST_TEMPLATE.md`)
- Comprehensive checklist for code quality
- Testing requirements
- Documentation guidelines

## 🚀 Getting Started

1. **Fork/Clone** the repository
2. **Install dependencies:** `pnpm install`
3. **Start development:** `pnpm start`
4. **Run tests:** `pnpm test:ci`
5. **Check code quality:** `pnpm lint`

## 📊 CI Status

The CI pipeline will automatically run on:
- ✅ Every push to main/master/develop
- ✅ Every pull request
- ✅ Weekly dependency updates
- ✅ Version tag releases

## 📈 Coverage & Quality

- **Test Coverage**: Tracked via Codecov
- **Code Quality**: ESLint + automated formatting checks
- **Bundle Analysis**: Automated size monitoring
- **Security**: Regular vulnerability scanning

## 🆘 Troubleshooting

### Common Issues

1. **Tests failing locally**: Run `pnpm test:ci` to match CI environment
2. **Build failures**: Check Node.js version (18.x or 20.x required)
3. **Lint errors**: Run `pnpm lint:fix` to auto-fix issues
4. **Dependency conflicts**: Check pnpm overrides in package.json

### Getting Help

- Check the [GitHub Actions tab](https://github.com/dytsou/reactCounter/actions) for workflow status
- Review [Dependabot alerts](https://github.com/dytsou/reactCounter/security/dependabot) for security issues
- Use the issue templates for bug reports or feature requests
