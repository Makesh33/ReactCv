import React, { PropsWithChildren, useContext, useEffect, useState } from "react";

export interface LoggerConfig {
	debug: (message: string) => boolean;
}

export interface LogContext {
	log: (message?: any, ...optionalParams: any[]) => void;
}

export class ConsoleLoggerContext implements LogContext {
	config: LoggerConfig;
	log: (message?: any, ...optionalParams: any[]) => void;

	constructor(config: LoggerConfig) {
		this.config = config;
		this.log = (message?: any, ...optionalParams: any[]) => {
			if (!this.config.debug(message)) return;

			console.log(message, optionalParams);
		};
	}
}

export const defaultConsoleLoggerContext = new ConsoleLoggerContext({ debug: (message: string) => false });

export const _consoleLoggerContext = React.createContext<LogContext>(defaultConsoleLoggerContext);
export { _consoleLoggerContext as LoggerContext };
export function useLoggerContext(config?: LoggerConfig): LogContext {
	const logger = useContext(_consoleLoggerContext);
	return config ? new ConsoleLoggerContext(config) : logger;
}

type LoggerProviderProps = PropsWithChildren<{ config?: LoggerConfig }>;

export function LoggerProvider({ config, children }: LoggerProviderProps): React.ReactElement {
	const [loggerContext, setLoggerContext] = useState<LogContext>(defaultConsoleLoggerContext);

	useEffect(() => {
		const logContext = new ConsoleLoggerContext(config ?? defaultConsoleLoggerContext.config);
		setLoggerContext(logContext);
	}, [config]);

	return <_consoleLoggerContext.Provider value={loggerContext}>{children}</_consoleLoggerContext.Provider>;
}
