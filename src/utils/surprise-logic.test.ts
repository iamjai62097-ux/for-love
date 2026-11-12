import test from 'node:test';
import assert from 'node:assert/strict';
import {
  DEFAULT_CONFIG,
  encodeConfigToUrl,
  decodeConfigFromUrl,
  mergeConfig,
  calculateDaysBetween,
  getRomanticCoupons
} from './surprise-logic.ts';

test('DEFAULT_CONFIG contains expected defaults', () => {
  assert.equal(DEFAULT_CONFIG.recipientName, "My Princess");
  assert.match(DEFAULT_CONFIG.greetingTitle, /Beautiful/);
  assert.match(DEFAULT_CONFIG.birthdayHeadline, /Happy Birthday/);
});

test('encodeConfigToUrl and decodeConfigFromUrl roundtrip cleanly', () => {
  const custom = {
    recipientName: "Amelia",
    senderName: "Noah",
    letterGreeting: "Dearest Amelia,"
  };
  const encoded = encodeConfigToUrl(custom);
  assert.ok(encoded.length > 0);

  const decoded = decodeConfigFromUrl(encoded);
  assert.ok(decoded);
  assert.equal(decoded?.recipientName, "Amelia");
  assert.equal(decoded?.senderName, "Noah");
  assert.equal(decoded?.letterGreeting, "Dearest Amelia,");
});

test('decodeConfigFromUrl handles invalid and empty strings gracefully', () => {
  assert.equal(decodeConfigFromUrl(""), null);
  assert.equal(decodeConfigFromUrl("invalid-base64-???"), null);
});

test('mergeConfig falls back to defaults when values are missing', () => {
  const merged = mergeConfig({ recipientName: "Sophia" });
  assert.equal(merged.recipientName, "Sophia");
  assert.equal(merged.birthdayHeadline, "Happy Birthday, Sophia! 🎂");
  assert.equal(merged.senderName, DEFAULT_CONFIG.senderName);
  assert.equal(merged.letterBody, DEFAULT_CONFIG.letterBody);
});

test('calculateDaysBetween computes correct day counts', () => {
  const day1 = new Date("2024-01-01T00:00:00Z");
  const day2 = new Date("2024-01-11T00:00:00Z");
  const diff = calculateDaysBetween(day1, day2);
  assert.equal(diff, 10);
});

test('getRomanticCoupons returns at least 6 romantic vouchers with icons and tags', () => {
  const coupons = getRomanticCoupons();
  assert.ok(coupons.length >= 6);
  assert.ok(coupons[0].title);
  assert.ok(coupons[0].icon);
  assert.ok(coupons[0].tag);
});
