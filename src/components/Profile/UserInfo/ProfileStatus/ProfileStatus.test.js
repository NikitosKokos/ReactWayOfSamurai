import React from 'react';
import { create, act } from 'react-test-renderer';
import ProfileStatus from './ProfileStatus';

describe("ProfileStatus component", () => {
    test('status from props should be in the state', () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status={'samurai'} />);
        });
        const instance = component.root;
        expect(instance.props.status).toBe("samurai");
    });

    test('after creation span should be displayed', () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status={'samurai'} />);
        });
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span).not.toBeNull();
    });

    test("after creation input shouldn't be displayed", () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status={'samurai'} />);
        });
        const instance = component.root;
        expect(() => {
            let input = instance.findByType('input');
        }).toThrow();
    });

    test('after creation span should be contains correct status', () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status={'samurai'} />);
        });
        const instance = component.root;
        const span = instance.findByType('span');
        expect(span.children[0]).toBe('samurai');
    });

    test('input should be displayed in editMode insead of span', () => {
        let component;
        act(() => {
            component = create(<ProfileStatus status={'samurai'} />);
        });
        const instance = component.root;
        const span = instance.findAllByType('div')[1];
        span.props.onClick();
        const input = instance.findByType('input');
        expect(input.props.value).toBe('samurai');
    });

    test('callback should be called', () => {
        const mockCallback = jest.fn();
        let component;
        act(() => {
            component = create(<ProfileStatus status={'samurai'} updateStatus={mockCallback} />);
        });
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});