import React, { useState } from "react";
import Button from "components/atoms/button";
import LazyImage from "components/atoms/lazy-image";
import FeatureCard from "components/organisms/feature-card";
import { useToast } from "hooks/useToast";
import { useModal } from "hooks/useModal";
import { Tooltip } from "components/atoms/tooltip";
import { Tabs } from "components/organisms/tabs";
import { Dropdown } from "components/organisms/dropdown";
import Input from "components/atoms/input/input";
import Textarea from "components/atoms/textarea/textarea";
import Select from "components/atoms/select/select";
import Toggle from "components/atoms/toggle";
import Stepper from "components/atoms/stepper";
import Autosearch from "components/atoms/autosearch";
import BackButton from "components/atoms/back-button/back-button";
import { SvgIcon } from "components/atoms/svg-sprite-loader";
import {
  Card as AtomCard,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "components/atoms/card";
import Logos from "components/atoms/logos";
import {
  AppErrorFallback,
  PageErrorFallback,
  WidgetErrorFallback,
} from "components/atoms/error-boundary";

const MOCK_ERROR = new Error(
  "TypeError: Cannot read properties of undefined (reading 'map')",
);

const AUTOSEARCH_OPTIONS = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
  { value: "nextjs", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const SVG_ICON_NAMES = [
  "ai",
  "analytics",
  "arrow-left",
  "arrow-right",
  "arrow-top-right",
  "attachment",
  "back-arrow",
  "bell",
  "calendar",
  "caret-down",
  "caret-left",
  "caret-right",
  "cart",
  "chart-bar",
  "check-circle",
  "check",
  "checklist",
  "clients",
  "clipboard-list",
  "clock",
  "close",
  "copy",
  "dashboard",
  "default-image",
  "diamond",
  "dollar",
  "double-check",
  "download",
  "edit",
  "email",
  "events",
  "external-link",
  "eye-off",
  "eye",
  "favorite",
  "filter",
  "folder",
  "gift",
  "graph",
  "grid",
  "home",
  "info",
  "inventory",
  "job",
  "launch",
  "layaway",
  "list",
  "loader",
  "location",
  "logout",
  "map-pin",
  "megaphone",
  "menu",
  "messages",
  "moon",
  "necklace",
  "notification",
  "paper-plane",
  "pause",
  "phone",
  "pinned",
  "play",
  "plus",
  "save",
  "search",
  "send",
  "settings",
  "sidebar-collapse",
  "sidebar-expand",
  "sliders-vertical",
  "star",
  "sun",
  "support",
  "target",
  "trash",
  "trend-up",
  "user",
  "users",
  "video-call",
  "waitlist",
  "warning",
  "watch",
  "workflow",
  "wrench",
];

const Components: React.FC = () => {
  const { showToast } = useToast();
  const { showModal, hideModal } = useModal();
  const [autosearchValue, setAutosearchValue] = useState("");

  const handleOpenModal = () => {
    showModal({
      title: "Delete Confirmation",
      content: (
        <p className="text-gray-600">
          Are you sure you want to delete this item? This action cannot be
          undone and all data will be permanently lost.
        </p>
      ),
      actions: (
        <>
          <Button variant="ghost" onClick={hideModal}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              hideModal();
              showToast({
                variant: "success",
                message: "Item deleted successfully.",
              });
            }}
          >
            Delete
          </Button>
        </>
      ),
    });
  };

  return (
    <div className="p-8 max-w-7xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Components</h1>
        <p className="text-gray-600">
          This page showcases the global components available in the project.
        </p>
      </div>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Toast Notifications
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button
            variant="outline"
            onClick={() => {
              showToast({
                variant: "success",
                title: "Success!",
                message: "Your changes have been saved successfully.",
              });
            }}
          >
            Show Success
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              showToast({
                variant: "error",
                title: "Error",
                message: "Failed to save changes. Please try again.",
              });
            }}
          >
            Show Error
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              showToast({
                variant: "warning",
                title: "Warning",
                message: "Your session will expire in 5 minutes.",
              });
            }}
          >
            Show Warning
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              showToast({
                variant: "info",
                message: "A new software update is available.",
              });
            }}
          >
            Show Info
          </Button>
          <Button
            variant="secondary"
            onClick={() => {
              showToast({
                variant: "warning",
                title: "Persistent",
                message: "I will stay here until you close me!",
                duration: 0,
              });
            }}
          >
            Show Persistent
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Tooltips</h2>
        <div className="flex flex-wrap gap-12 items-center pt-8 pb-4">
          <Tooltip content="I am above the button!" position="top">
            <Button variant="outline">Hover Top</Button>
          </Tooltip>

          <Tooltip content="I am below the button!" position="bottom">
            <Button variant="outline">Hover Bottom</Button>
          </Tooltip>

          <Tooltip content="I am on the right!" position="right">
            <Button variant="outline">Hover Right</Button>
          </Tooltip>

          <Tooltip content="I am on the left!" position="left">
            <Button variant="outline">Hover Left</Button>
          </Tooltip>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Tabs</h2>
        <div className="bg-white/5 rounded-xl p-6 border border-gray-200 shadow-sm max-w-3xl">
          <Tabs
            tabs={[
              {
                id: "profile",
                label: "Profile",
                content: (
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Profile Information
                    </h3>
                    <p className="text-gray-600">
                      This is the profile tab content. You can put forms or
                      personal details here.
                    </p>
                  </div>
                ),
              },
              {
                id: "settings",
                label: "Settings",
                content: (
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Account Settings
                    </h3>
                    <p className="text-gray-600">
                      Configure your preferences and account security options
                      here.
                    </p>
                  </div>
                ),
              },
              {
                id: "billing",
                label: "Billing",
                content: (
                  <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Billing History
                    </h3>
                    <p className="text-gray-600">
                      View your past invoices and manage your payment methods.
                    </p>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Dropdowns</h2>
        <div className="flex flex-col gap-12 bg-white/5 rounded-xl p-6 border border-gray-200 shadow-sm min-h-[300px]">
          <div className="flex justify-between items-start">
            <Dropdown
              items={[
                {
                  id: "1",
                  label: "Account Settings",
                  onClick: () => {
                    showToast({
                      title: "Account Settings",
                      message: "Navigating to settings",
                      variant: "info",
                    });
                  },
                },
                {
                  id: "2",
                  label: "Support",
                  onClick: () => {
                    showToast({
                      title: "Support",
                      message: "Opening help center",
                      variant: "info",
                    });
                  },
                },
                {
                  id: "3",
                  label: "Logout",
                  danger: true,
                  onClick: () => {
                    showToast({
                      title: "Logout",
                      message: "You have been logged out",
                      variant: "warning",
                    });
                  },
                },
              ]}
            >
              <Button variant="primary">Standard Dropdown</Button>
            </Dropdown>

            <Dropdown
              align="right"
              items={[
                {
                  id: "edit",
                  label: "Edit Post",
                  onClick: () => {
                    showToast({
                      title: "Edit",
                      message: "Editing post...",
                      variant: "info",
                    });
                  },
                },
                {
                  id: "delete",
                  label: "Delete Post",
                  danger: true,
                  onClick: () => {
                    showToast({
                      title: "Delete",
                      message: "Post deleted permanently",
                      variant: "error",
                    });
                  },
                },
              ]}
            >
              <Button variant="outline">Right Aligned Menu</Button>
            </Dropdown>
          </div>

          <div className="mt-auto pt-24 pb-8 flex justify-center border-t border-gray-100">
            <Dropdown
              items={[
                { id: "flip1", label: "I flipped upwards!", onClick: () => {} },
                {
                  id: "flip2",
                  label: "Because I hit the bottom",
                  onClick: () => {},
                },
                {
                  id: "flip3",
                  label: "Of the viewport edge",
                  onClick: () => {},
                },
                {
                  id: "flip4",
                  label: "Super smart, right?",
                  onClick: () => {},
                },
              ]}
            >
              <Button variant="secondary">
                Test Viewport Collision (Scroll Down)
              </Button>
            </Dropdown>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Modal Dialogs
        </h2>
        <div className="flex flex-wrap gap-4 items-center">
          <Button variant="outline" onClick={handleOpenModal}>
            Show Confirmation Modal
          </Button>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Button Variants & Sizes
        </h2>

        <div className="space-y-8">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3 pr-6 w-24">
                    Variant
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3 pr-6">
                    Small
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3 pr-6">
                    Medium
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider pb-3">
                    Large
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {(
                  [
                    "primary",
                    "secondary",
                    "outline",
                    "ghost",
                    "danger",
                    "link",
                  ] as const
                ).map((variant) => (
                  <tr key={variant}>
                    <td className="py-3 pr-6 text-xs text-gray-500 capitalize font-medium">
                      {variant}
                    </td>
                    <td className="py-3 pr-6">
                      <Button variant={variant} size="sm">
                        Button
                      </Button>
                    </td>
                    <td className="py-3 pr-6">
                      <Button variant={variant} size="md">
                        Button
                      </Button>
                    </td>
                    <td className="py-3">
                      <Button variant={variant} size="lg">
                        Button
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
              Icon & Loading States
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <Button size="icon" icon="settings" aria-label="Settings" />
              <Button icon="download" size="sm">
                Download
              </Button>
              <Button
                icon="arrow-right"
                iconPosition="right"
                variant="secondary"
                size="sm"
              >
                Next Step
              </Button>
              <Button isLoading size="sm">
                Processing...
              </Button>
              <Button variant="outline" isLoading icon="save" size="sm">
                Saving
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">LazyImage</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <LazyImage
              src="https://images.unsplash.com/photo-1682687220063-4742bd7fd538?q=80&w=800&auto=format&fit=crop"
              alt="Nature"
              className="w-full h-64"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <LazyImage
              src="https://images.unsplash.com/photo-1682687982501-1e58f8111222?q=80&w=800&auto=format&fit=crop"
              alt="Nature 2"
              className="w-full h-64"
            />
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Card</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            title="Dashboard"
            description="A central hub for tracking analytics, metrics, and key performance indicators."
            icon="dashboard"
            href="#"
            borderColor="border-t-blue-500"
          />
          <FeatureCard
            title="Objectives"
            description="Set targets and measure your team's success with clear goals."
            icon="target"
            href="#"
            borderColor="border-t-teal-500"
          />
          <FeatureCard
            title="Deployments"
            description="Ship your application to production quickly and safely."
            icon="launch"
            href="#"
            borderColor="border-t-yellow-400"
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Card Layout (Atom)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <AtomCard>
            <CardHeader>
              <CardTitle>Monthly Report</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                Your team closed 24 deals this month — a 12% increase over last
                month. Revenue target is on track.
              </p>
            </CardContent>
            <CardFooter className="justify-end gap-2">
              <Button variant="ghost" size="sm">
                Dismiss
              </Button>
              <Button size="sm">View Report</Button>
            </CardFooter>
          </AtomCard>

          <AtomCard>
            <CardHeader>
              <CardTitle>Storage Usage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Used</span>
                  <span className="font-medium">64 GB / 100 GB</span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="bg-blue-500 h-2 rounded-full"
                    style={{ width: "64%" }}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <span className="text-xs text-gray-400">Updated just now</span>
            </CardFooter>
          </AtomCard>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Form Controls
        </h2>
        <div className="space-y-10 max-w-3xl">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
              Input
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Username" placeholder="e.g. john_doe" />
              <Input
                label="Email"
                placeholder="you@example.com"
                error="Please enter a valid email address."
              />
              <Input label="Disabled" placeholder="Not editable" disabled />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
              Textarea
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Textarea label="Notes" placeholder="Enter your notes here…" />
              <Textarea
                label="Feedback"
                placeholder="Something went wrong…"
                error="Feedback must be at least 10 characters."
              />
              <Textarea label="Disabled" placeholder="Not editable" disabled />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
              Select
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select label="Role">
                <option value="">Choose a role…</option>
                <option value="admin">Admin</option>
                <option value="editor">Editor</option>
                <option value="viewer">Viewer</option>
              </Select>
              <Select label="Status" error="Please select a status.">
                <option value="">Choose…</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
              <Select label="Disabled" disabled>
                <option>Not selectable</option>
              </Select>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
              Toggle
            </h3>
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-8">
                <span className="text-xs text-gray-400 w-8 shrink-0">sm</span>
                <Toggle size="sm" label="Notifications" defaultChecked />
                <Toggle size="sm" label="Dark mode" />
                <Toggle size="sm" label="Disabled" disabled />
                <Toggle size="sm" label="Disabled on" disabled defaultChecked />
              </div>
              <div className="flex flex-wrap items-center gap-8">
                <span className="text-xs text-gray-400 w-8 shrink-0">md</span>
                <Toggle size="md" label="Notifications" defaultChecked />
                <Toggle size="md" label="Dark mode" />
                <Toggle size="md" label="Disabled" disabled />
                <Toggle size="md" label="Disabled on" disabled defaultChecked />
              </div>
              <div className="flex flex-wrap items-center gap-8">
                <span className="text-xs text-gray-400 w-8 shrink-0">lg</span>
                <Toggle size="lg" label="Notifications" defaultChecked />
                <Toggle size="lg" label="Dark mode" />
                <Toggle size="lg" label="Disabled" disabled />
                <Toggle size="lg" label="Disabled on" disabled defaultChecked />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">
              Stepper
            </h3>
            <div className="flex flex-wrap gap-8 items-end">
              <div>
                <p className="text-sm text-gray-500 mb-2">Default (1–10)</p>
                <Stepper defaultValue={3} min={1} max={10} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Custom step (0–100, step 10)
                </p>
                <Stepper defaultValue={20} min={0} max={100} />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Disabled</p>
                <Stepper defaultValue={5} disabled />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Autosearch
        </h2>
        <div className="max-w-sm space-y-4">
          <Autosearch
            label="Framework"
            placeholder="Search frameworks…"
            options={AUTOSEARCH_OPTIONS}
            value={autosearchValue}
            onChange={setAutosearchValue}
          />
          {autosearchValue && (
            <p className="text-sm text-gray-500">
              Selected:{" "}
              <span className="font-medium text-gray-900">
                {autosearchValue}
              </span>
            </p>
          )}
          <Autosearch
            label="Disabled"
            placeholder="Not interactive"
            options={AUTOSEARCH_OPTIONS}
            disabled
          />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Back Button
        </h2>
        <div className="flex flex-wrap gap-6 items-center">
          <BackButton label="Back" />
          <BackButton label="Return to Dashboard" to="/" />
          <BackButton label="Back" variant="outline" />
          <BackButton label="Back" variant="ghost" />
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">SVG Icons</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
          {SVG_ICON_NAMES.map((name) => (
            <Tooltip key={name} content={name} position="top">
              <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-gray-200 hover:border-gray-400 hover:bg-gray-50 cursor-default transition-colors">
                <SvgIcon name={name} className="w-6 h-6 text-gray-700" />
                <span className="text-xs text-gray-400 truncate w-full text-center">
                  {name}
                </span>
              </div>
            </Tooltip>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">Logos</h2>
        <div className="flex flex-wrap items-end gap-8">
          <div className="flex flex-col items-center gap-2">
            <Logos.Vite width={24} height={24} />
            <span className="text-xs text-gray-400">24px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logos.Vite width={48} height={48} />
            <span className="text-xs text-gray-400">48px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logos.Vite width={80} height={80} />
            <span className="text-xs text-gray-400">80px</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <Logos.Vite width={120} height={120} />
            <span className="text-xs text-gray-400">120px</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
          Error Fallbacks
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
              Widget — inline section failure
            </h3>
            <div className="max-w-sm">
              <WidgetErrorFallback
                error={MOCK_ERROR}
                resetErrorBoundary={() => {}}
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
              Page — route-level failure
            </h3>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <PageErrorFallback
                error={MOCK_ERROR}
                resetErrorBoundary={() => {}}
              />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wider">
              App — root-level crash
            </h3>
            <div className="border border-gray-200 rounded-xl overflow-hidden">
              <AppErrorFallback
                error={MOCK_ERROR}
                resetErrorBoundary={() => {}}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Components;
