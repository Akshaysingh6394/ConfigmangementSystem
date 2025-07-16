import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Settings, Smartphone, Monitor, Cloud, Users, Target, CheckCircle, AlertTriangle, ArrowRight, Plus, Edit3, Filter, Search } from 'lucide-react';

const App = () => {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({
    prd: true,
    wireframes: false
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const SectionHeader = ({ id, title, icon: Icon, children }: { id: string; title: string; icon: React.ComponentType<any>; children: React.ReactNode }) => (
    <div className="mb-8">
      <div 
        className="flex items-center gap-3 cursor-pointer p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-indigo-100 transition-all duration-200"
        onClick={() => toggleSection(id)}
      >
        {expandedSections[id] ? <ChevronDown className="h-5 w-5 text-blue-600" /> : <ChevronRight className="h-5 w-5 text-blue-600" />}
        <Icon className="h-6 w-6 text-blue-600" />
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>
      {expandedSections[id] && (
        <div className="mt-6 pl-4">
          {children}
        </div>
      )}
    </div>
  );

  const FeatureCard = ({ icon: Icon, title, description, priority }: { icon: React.ComponentType<any>; title: string; description: string; priority: string }) => (
    <div className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-blue-100 rounded-lg">
          <Icon className="h-5 w-5 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-semibold text-gray-800">{title}</h4>
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
              priority === 'High' ? 'bg-red-100 text-red-800' : 
              priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
              'bg-green-100 text-green-800'
            }`}>
              {priority}
            </span>
          </div>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );

  const UserStory = ({ persona, story, acceptance }: { persona: string; story: string; acceptance: string[] }) => (
    <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-blue-500">
      <div className="flex items-center gap-2 mb-2">
        <Users className="h-4 w-4 text-blue-600" />
        <span className="font-medium text-blue-800">{persona}</span>
      </div>
      <p className="text-gray-700 mb-3">{story}</p>
      <div className="space-y-1">
        <p className="text-sm font-medium text-gray-600">Acceptance Criteria:</p>
        {acceptance.map((criteria, index) => (
          <div key={index} className="flex items-start gap-2">
            <CheckCircle className="h-3 w-3 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-gray-600">{criteria}</span>
          </div>
        ))}
      </div>
    </div>
  );

  const Wireframe = ({ title, description, children }: { title: string; description: string; children: React.ReactNode }) => (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h4 className="font-semibold text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Settings className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-900">Configuration Management System</h1>
          </div>
          <p className="text-xl text-gray-600">Product Requirements Document & Wireframes</p>
          <p className="text-lg text-gray-500 mt-2">KaneAI & Test Manager Integration</p>
        </div>

        {/* PRD Section */}
        <SectionHeader id="prd" title="Product Requirements Document" icon={Target}>
          <div className="space-y-8">
            
            {/* Introduction */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Introduction</h3>
              <p className="text-gray-600 leading-relaxed">
                The Configuration Management system is a critical component within the KaneAI ecosystem that streamlines the process of managing test configurations across multiple platforms and devices. This system enables QA engineers and development teams to efficiently allocate configurations to test cases and test runs while maintaining seamless application updates and edits. By centralizing configuration management, teams can ensure consistent testing environments and reduce the complexity of managing diverse testing scenarios across Desktop, Real Device, and Virtual Device configurations.
              </p>
            </section>

            {/* Goals and Objectives */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Goals and Objectives</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Primary Goals</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Simplify configuration allocation to test cases and test runs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Maintain application updates and edits effectively</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Target className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Ensure seamless integration with Test Manager</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-gray-700">Success Metrics</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">50% reduction in configuration setup time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">95% accuracy in configuration allocation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Improved team productivity by 30%</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Feature Breakdown */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Feature Breakdown</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <FeatureCard 
                  icon={Monitor}
                  title="Configuration Types Management"
                  description="Support for Desktop, Real Device, and Virtual Device configurations with specific parameters for each type"
                  priority="High"
                />
                <FeatureCard 
                  icon={Cloud}
                  title="Cloud Device Support"
                  description="Differentiate between Public and Private cloud real devices with appropriate allocation logic"
                  priority="High"
                />
                <FeatureCard 
                  icon={Search}
                  title="Regular Expression Filtering"
                  description="Advanced regex-based filtering for Manufacturer, Device Name, and OS version selection"
                  priority="Medium"
                />
                <FeatureCard 
                  icon={ArrowRight}
                  title="Configuration Allocation"
                  description="Seamless assignment of configurations to test cases and test runs with bulk operations"
                  priority="High"
                />
                <FeatureCard 
                  icon={Edit3}
                  title="Application Maintenance"
                  description="Easy updating and editing of application versions within configurations"
                  priority="Medium"
                />
                <FeatureCard 
                  icon={Settings}
                  title="Integration Management"
                  description="Smooth integration with Test Manager for test execution and automation"
                  priority="High"
                />
              </div>
            </section>

            {/* Configuration Types */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Configuration Types & Parameters</h3>
              <div className="space-y-6">
                
                {/* Desktop Configuration */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Monitor className="h-5 w-5 text-blue-600" />
                    <h4 className="font-medium text-gray-800">Desktop Configuration</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">KaneAI & Test Manager</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• OS (Windows, macOS, Linux)</li>
                        <li>• OS Version</li>
                        <li>• Browser (Chrome, Firefox, Safari, Edge)</li>
                        <li>• Browser Version</li>
                        <li>• Resolution (Default configurable)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Real Device Configuration */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Smartphone className="h-5 w-5 text-green-600" />
                    <h4 className="font-medium text-gray-800">Real Device Configuration</h4>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">KaneAI & Test Manager</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• OS (iOS, Android)</li>
                        <li>• Manufacturer</li>
                        <li>• Device Name</li>
                        <li>• OS Version</li>
                        <li>• Application (Optional)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-700 mb-2">Cloud Types</h5>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Public Cloud</li>
                        <li>• Private Cloud</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Virtual Device Configuration */}
                <div className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Cloud className="h-5 w-5 text-purple-600" />
                    <h4 className="font-medium text-gray-800">Virtual Device Configuration</h4>
                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">Test Manager Only</span>
                  </div>
                  <div>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• OS (iOS, Android)</li>
                      <li>• Browser</li>
                      <li>• Manufacturer</li>
                      <li>• Device Name</li>
                      <li>• OS Version</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* User Stories */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">User Stories</h3>
              <div className="space-y-4">
                <UserStory 
                  persona="QA Engineer"
                  story="As a QA Engineer, I want to easily create and manage test configurations so that I can efficiently set up test environments for different devices and browsers."
                  acceptance={[
                    "Can create configurations for Desktop, Real Device, and Virtual Device types",
                    "Can specify all required parameters for each configuration type",
                    "Can save and reuse configurations across multiple test cases",
                    "Can edit existing configurations without affecting running tests"
                  ]}
                />
                <UserStory 
                  persona="Development Manager"
                  story="As a Development Manager, I want to allocate configurations to test runs in bulk so that I can efficiently manage testing across multiple environments."
                  acceptance={[
                    "Can select multiple configurations and assign them to test runs",
                    "Can filter configurations using regex patterns",
                    "Can view allocation status and conflicts",
                    "Can override configurations at the test run level"
                  ]}
                />
                <UserStory 
                  persona="Test Automation Lead"
                  story="As a Test Automation Lead, I want to maintain application versions within configurations so that tests run against the correct application builds."
                  acceptance={[
                    "Can update application versions across configurations",
                    "Can track version history and changes",
                    "Can rollback to previous application versions",
                    "Can set default applications for configuration types"
                  ]}
                />
              </div>
            </section>

            {/* Challenges */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Challenges & Trade-offs</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-yellow-800">Scalability</h4>
                    <p className="text-yellow-700 text-sm">Managing large numbers of configurations may impact performance and user experience. Consider pagination, caching, and efficient filtering mechanisms.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-blue-800">Integration Complexity</h4>
                    <p className="text-blue-700 text-sm">Ensuring smooth integration with Test Manager requires careful API design and error handling to prevent test execution failures.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-red-800">Configuration Conflicts</h4>
                    <p className="text-red-700 text-sm">Handling conflicts when multiple configurations target the same device or when device availability changes requires robust conflict resolution.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Prioritization */}
            <section className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Feature Prioritization</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-red-800 mb-3">Phase 1 - High Priority (MVP)</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-gray-700">Basic configuration creation and management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-gray-700">Configuration allocation to test cases</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                      <span className="text-gray-700">Test Manager integration for test execution</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-yellow-800 mb-3">Phase 2 - Medium Priority</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700">Regular expression filtering system</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700">Application version management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                      <span className="text-gray-700">Bulk configuration operations</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-green-800 mb-3">Phase 3 - Low Priority (Enhancements)</h4>
                  <ul className="space-y-2 ml-4">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Advanced analytics and reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Configuration templates and presets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      <span className="text-gray-700">Automated configuration optimization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </SectionHeader>

        {/* Wireframes Section */}
        <SectionHeader id="wireframes" title="Wireframes" icon={Monitor}>
          <div className="space-y-8">
            
            {/* Configuration Management Interface */}
            <Wireframe 
              title="Configuration Management Interface"
              description="Main interface for managing all configuration types with filtering and bulk operations"
            >
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 p-4 bg-white rounded border">
                  <div className="flex items-center gap-3">
                    <Settings className="h-6 w-6 text-blue-600" />
                    <h3 className="text-lg font-semibold">Configuration Management</h3>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    <Plus className="h-4 w-4" />
                    New Configuration
                  </button>
                </div>

                {/* Filters */}
                <div className="mb-6 p-4 bg-white rounded border">
                  <div className="flex items-center gap-4 mb-3">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <span className="font-medium">Filters</span>
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <div className="border rounded px-3 py-2 bg-gray-50">
                        <select className="w-full bg-transparent">
                          <option>All Types</option>
                          <option>Desktop</option>
                          <option>Real Device</option>
                          <option>Virtual Device</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">OS</label>
                      <div className="border rounded px-3 py-2 bg-gray-50">
                        <select className="w-full bg-transparent">
                          <option>All OS</option>
                          <option>Windows</option>
                          <option>macOS</option>
                          <option>iOS</option>
                          <option>Android</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Manufacturer</label>
                      <div className="border rounded px-3 py-2 bg-gray-50">
                        <input type="text" placeholder="Regex pattern" className="w-full bg-transparent" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Device Name</label>
                      <div className="border rounded px-3 py-2 bg-gray-50">
                        <input type="text" placeholder="Regex pattern" className="w-full bg-transparent" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Configuration List */}
                <div className="bg-white rounded border">
                  <div className="p-4 border-b bg-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Configurations (47)</span>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">Select All</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Configuration Items */}
                  <div className="divide-y">
                    {[
                      { type: 'Desktop', os: 'Windows 11', browser: 'Chrome 120', resolution: '1920x1080' },
                      { type: 'Real Device', os: 'iOS 17.2', device: 'iPhone 15 Pro', manufacturer: 'Apple', cloud: 'Public' },
                      { type: 'Virtual Device', os: 'Android 14', device: 'Pixel 8', manufacturer: 'Google', browser: 'Chrome' },
                      { type: 'Desktop', os: 'macOS 14', browser: 'Safari 17', resolution: '2560x1440' }
                    ].map((config, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <input type="checkbox" className="rounded" />
                            <div className="flex items-center gap-2">
                              {config.type === 'Desktop' && <Monitor className="h-4 w-4 text-blue-600" />}
                              {config.type === 'Real Device' && <Smartphone className="h-4 w-4 text-green-600" />}
                              {config.type === 'Virtual Device' && <Cloud className="h-4 w-4 text-purple-600" />}
                              <span className="font-medium">{config.type}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">OS:</span> {config.os}
                              {config.browser && <span className="ml-3"><span className="font-medium">Browser:</span> {config.browser}</span>}
                              {config.device && <span className="ml-3"><span className="font-medium">Device:</span> {config.device}</span>}
                              {config.manufacturer && <span className="ml-3"><span className="font-medium">Manufacturer:</span> {config.manufacturer}</span>}
                              {config.resolution && <span className="ml-3"><span className="font-medium">Resolution:</span> {config.resolution}</span>}
                              {config.cloud && <span className="ml-3"><span className="font-medium">Cloud:</span> {config.cloud}</span>}
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                              <Edit3 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bulk Actions */}
                <div className="mt-4 p-4 bg-blue-50 rounded border border-blue-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-700">3 configurations selected</span>
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                        Assign to Test Cases
                      </button>
                      <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                        Assign to Test Runs
                      </button>
                      <button className="px-3 py-1 bg-gray-600 text-white rounded text-sm hover:bg-gray-700">
                        Duplicate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Wireframe>

            {/* Application Management */}
            <Wireframe 
              title="Application Management"
              description="Interface for managing application versions within configurations"
            >
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                {/* Header */}
                <div className="flex items-center justify-between mb-6 p-4 bg-white rounded border">
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-6 w-6 text-green-600" />
                    <h3 className="text-lg font-semibold">Application Management</h3>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    <Plus className="h-4 w-4" />
                    Add Application
                  </button>
                </div>

                {/* Application List */}
                <div className="bg-white rounded border">
                  <div className="p-4 border-b bg-gray-50">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">Applications (12)</span>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-gray-400" />
                          <input type="text" placeholder="Search applications..." className="border rounded px-3 py-1 text-sm" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Application Items */}
                  <div className="divide-y">
                    {[
                      { name: 'MyApp Mobile', platform: 'iOS', version: '2.1.0', configurations: 8, lastUpdated: '2 hours ago' },
                      { name: 'MyApp Mobile', platform: 'Android', version: '2.0.8', configurations: 12, lastUpdated: '1 day ago' },
                      { name: 'MyApp Web', platform: 'Web', version: '1.5.2', configurations: 15, lastUpdated: '3 days ago' },
                      { name: 'TestApp Beta', platform: 'iOS', version: '1.0.0-beta.3', configurations: 3, lastUpdated: '1 week ago' }
                    ].map((app, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <Smartphone className="h-4 w-4 text-green-600" />
                              <span className="font-medium">{app.name}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-6">
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Platform:</span> {app.platform}
                              <span className="ml-3"><span className="font-medium">Version:</span> {app.version}</span>
                              <span className="ml-3"><span className="font-medium">Configurations:</span> {app.configurations}</span>
                              <span className="ml-3"><span className="font-medium">Updated:</span> {app.lastUpdated}</span>
                            </div>
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                              <Edit3 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Version History */}
                <div className="mt-6 bg-white rounded border">
                  <div className="p-4 border-b bg-gray-50">
                    <h4 className="font-medium">Version History - MyApp Mobile (iOS)</h4>
                  </div>
                  <div className="divide-y">
                    {[
                      { version: '2.1.0', status: 'Current', date: '2024-01-15', changes: 'Bug fixes and performance improvements' },
                      { version: '2.0.8', status: 'Previous', date: '2024-01-10', changes: 'New features and UI updates' },
                      { version: '2.0.7', status: 'Archived', date: '2024-01-05', changes: 'Security updates' }
                    ].map((version, index) => (
                      <div key={index} className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="font-medium">{version.version}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              version.status === 'Current' ? 'bg-green-100 text-green-800' : 
                              version.status === 'Previous' ? 'bg-yellow-100 text-yellow-800' : 
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {version.status}
                            </span>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Date:</span> {version.date}
                              <span className="ml-3"><span className="font-medium">Changes:</span> {version.changes}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                                View Details
                              </button>
                              {version.status !== 'Current' && (
                                <button className="px-3 py-1 bg-green-600 text-white rounded text-sm hover:bg-green-700">
                                  Restore
                                </button>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Wireframe>

            {/* Configuration Creation Flow */}
            <Wireframe 
              title="Configuration Creation Flow"
              description="Step-by-step process for creating new configurations"
            >
              <div className="border-2 border-gray-300 rounded-lg p-6 bg-gray-50">
                {/* Step Indicator */}
                <div className="mb-6 flex items-center justify-center">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">1</div>
                      <span className="font-medium">Type Selection</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">2</div>
                      <span className="text-gray-600">Configuration</span>
                    </div>
                    <ArrowRight className="h-4 w-4 text-gray-400" />
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-sm font-medium">3</div>
                      <span className="text-gray-600">Review</span>
                    </div>
                  </div>
                </div>

                {/* Step 1: Type Selection */}
                <div className="bg-white rounded border p-6">
                  <h4 className="font-medium mb-4">Step 1: Select Configuration Type</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-blue-500 rounded-lg p-4 bg-blue-50">
                      <div className="flex items-center gap-3 mb-2">
                        <Monitor className="h-6 w-6 text-blue-600" />
                        <span className="font-medium">Desktop</span>
                      </div>
                      <p className="text-sm text-gray-600">For web browser testing on desktop operating systems</p>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <Smartphone className="h-6 w-6 text-green-600" />
                        <span className="font-medium">Real Device</span>
                      </div>
                      <p className="text-sm text-gray-600">For testing on physical mobile devices</p>
                    </div>
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-gray-300 cursor-pointer">
                      <div className="flex items-center gap-3 mb-2">
                        <Cloud className="h-6 w-6 text-purple-600" />
                        <span className="font-medium">Virtual Device</span>
                      </div>
                      <p className="text-sm text-gray-600">For testing on emulated mobile devices</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center justify-between">
                  <button className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-50">
                    Cancel
                  </button>
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    Next Step
                  </button>
                </div>
              </div>
            </Wireframe>
          </div>
        </SectionHeader>
      </div>
    </div>
  );
};

export default App;